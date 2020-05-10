import mongoose from "mongoose";
import { config } from "../config";

export const dbconnect = async () => {
  await mongoose.connect(config.mongoDbConnString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
