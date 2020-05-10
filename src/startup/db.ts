import mongoose from "mongoose";
import { config } from "../config";
export const dbconnect = async () => {
  const connString = process.env.MONGODB_URI || config.dbConnectionString;
  await mongoose.connect(connString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
