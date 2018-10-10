import express from 'express';
import cors from 'cors';
import database from './database';
import * as helpers from './helpers';
import * as routes from './routes';
import config from '../config';

const app = express();
app.use(cors());

database({ config }).then(db => {
  // Configuration for routes
  const options = {
    app,
    config,
    db,
    helpers,
    prefix: `/${config.api.version}`
  };

  // Initialize routes
  Object.keys(routes).forEach(key => routes[key](options));

  app.listen(config.api.port, config.api.host, () =>
    console.log(`Example app listening on port ${config.api.port}!`)
  );
});
