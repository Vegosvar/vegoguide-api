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

  return Promise.all(insertions)
    .then(() => {
      console.log('Done!');
    })
    .catch(error => {
      console.error(error);
    });
});
