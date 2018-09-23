import express from 'express';
import cors from 'cors';
import database from './database';
import * as helpers from './helpers';
import * as routes from './routes';
import config from '../config';

const app = express();
app.use(cors());

// Configuration for routes
const options = {
  app,
  config,
  helpers,
  database: database({ config }),
  prefix: `/${config.api.version}`
};

// Initialize routes
Object.keys(routes).forEach(key => routes[key](options));

app.listen(config.api.port, () =>
  console.log(`Example app listening on port ${config.api.port}!`)
);
