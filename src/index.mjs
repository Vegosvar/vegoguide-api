import express from "express";
import config from "../config.mjs";
import * as routes from "./routes";

const app = express();
const database = {};

// Initialize routes
Object.keys(routes).forEach(key =>
  routes[key]({ app, config, database })
);

app.listen(config.port, () =>
  console.log(`Example app listening on port ${config.port}!`)
);
