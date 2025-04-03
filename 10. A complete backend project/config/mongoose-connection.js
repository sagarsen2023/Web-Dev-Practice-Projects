const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose-connection");

const connectToDb = async () => {
  try {
    const mongooseConnection = await mongoose.connect(process.env.MONGODB_URI);
    dbgr("Connected to mongodb successfully");
    return mongooseConnection;
  } catch (error) {
    dbgr("Error connecting to mongodb: ", error.message);
    throw new Error("Error connecting to mongodb: " + error.message);
  }
};

module.exports = connectToDb;
