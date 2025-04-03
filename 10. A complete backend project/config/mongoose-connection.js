const mongoose = require("mongoose");
const envKeys = require("../constants/env-keys");
const dbgr = require("debug")("development:mongoose-connection");

const connectToDb = async () => {
  try {
    const mongooseConnection = await mongoose.connect(envKeys.mongoDbUri);
    dbgr("Connected to mongodb successfully");
    return mongooseConnection;
  } catch (error) {
    dbgr("Error connecting to mongodb: ", error.message);
    throw new Error("Error connecting to mongodb: " + error.message);
  }
};

module.exports = connectToDb;
