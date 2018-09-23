import express from "express";
import cors from "cors";
import * as helpers from "./helpers";
import * as routes from "./routes";
import config from "../config.mjs";

const app = express();
app.use(cors());

// Initialize routes
Object.keys(routes).forEach(key => routes[key]({ app, config, helpers }));

app.listen(config.port, () =>
  console.log(`Example app listening on port ${config.port}!`)
);
