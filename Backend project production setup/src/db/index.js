import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectToDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DATABASE_URL}/${DB_NAME}`
    );
    console.log(
      "Mongodb connection response",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log("Mongodb connection error", error);
    process.emit(1);
  }
};

export default connectToDb;
