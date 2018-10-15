import express from 'express';
import cors from 'cors';
import database from './database';
import * as helpers from './helpers';
import * as routes from './routes';
import config from '../config';

const app = express();
app.use(cors());

database({ config, helpers })
  .then(db => {
    const { host, port, protocol, version } = config.api;

    // Configuration for routes
    const options = {
      app,
      config,
      db,
      helpers,
      // The prefix before each route
      prefix: `/${version}`
    };

    // Initialize routes
    Object.keys(routes).forEach(key => routes[key](options));

    app.listen(port, host, () => {
      const url = `${protocol}://${host}:${port}`;

      console.log(`App listening on ${url}`);
    });
  })
  .catch(error => {
    console.error(error);
  });
