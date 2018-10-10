import fsExtra from 'fs-extra';
import path from 'path';
import * as sampleData from './sample-data';
import config from '../config';
import database from './database';

database({ config }).then(db => {
  // Insert all the documents
  const insertions = Object.keys(sampleData).map(key => {
    const documents = sampleData[key];
    const operations = documents.map(document =>
      db.model(key).create(document)
    );

    return Promise.all(operations);
  });

  // Copy all the files
  const copy = fsExtra.copy(
    path.resolve('src/sample-data/uploads'),
    path.resolve('public')
  );

  // Wait until all operations are completed
  return Promise.all(insertions, copy)
    .then(() => {
      console.log('Done!');
    })
    .catch(error => {
      console.error(error);
    });
});
