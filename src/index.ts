const express = require("express");
import "reflect-metadata";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import { dbconnect } from "./startup/db";
import { sessionInit } from "./startup/session";
import { apolloServer } from "./startup/appoloServer";
import { processExit } from "./startup/exitProcess";
import { config } from "./config";

const main = async () => {
  processExit();
  await dbconnect();

  const app = express();

  app.use(cors());
  app.use(sessionInit);

  await apolloServer(app);

  app.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`);
  });
};
main();
