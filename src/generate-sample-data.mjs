import fsExtra from 'fs-extra';
import path from 'path';
import * as sampleData from './sample-data';
import config from '../config';
import database from './database';

database({ config }).then(db => {
  const insertDocuments = (documents, model) =>
    Promise.all(documents.map(document => db.model(model).create(document)));

  // Get all collections
  const {
    categories,
    comments,
    ratings,
    roles,
    images,
    posts,
    users
  } = sampleData;

  // Insert the documents
  const insertions = Promise.all([
    insertDocuments(categories, 'categories'),
    insertDocuments(images, 'images'),
    insertDocuments(posts, 'posts'),
    insertDocuments(roles, 'roles'),
    insertDocuments(users, 'users')
  ])
    // Insert the rest of the documents with side effects in their life cycle hooks
    .then(() =>
      Promise.all([
        insertDocuments(posts.map(({ _id }) => comments(3, _id)), 'comments'),
        insertDocuments(posts.map(({ _id }) => ratings(3, _id)), 'ratings')
      ])
    );

  // Copy all the files
  const copy = fsExtra.copy(
    path.resolve('src/sample-data/uploads'),
    path.resolve('public')
  );

  // Wait until all operations are completed
  return Promise.all([insertions, copy])
    .then(() => {
      console.log('Done!');
    })
    .catch(error => {
      console.error(error);
    });
});
