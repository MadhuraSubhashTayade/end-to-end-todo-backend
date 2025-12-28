import mongoose, { Connection, Mongoose } from "mongoose";
import { config } from "./index";

export const connectDb = async () => {
  try {
    const conn: Mongoose = await mongoose.connect(config.mongo_uri);
    const dbConn: Connection = conn.connection;
    console.log(`Connected to MongoDB successfully ${dbConn.host}`);
  } catch (err: unknown) {
    console.error(`Error connecting MongoDB: ${err}`);
  }
};
