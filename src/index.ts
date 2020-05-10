const express = require("express");
import "reflect-metadata";
import cors from "cors";
import { dbconnect } from "./startup/db";
import { sessionInit } from "./startup/session";
import { apolloServer } from "./startup/appoloServer";
import dotenv from "dotenv";
dotenv.config();

const main = async () => {
  dbconnect();

  const app = express();

  app.use(cors());
  app.use(sessionInit);

  await apolloServer(app);
  const port = process.env.PORT || 8000;

  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
};
main();
