const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    const mongooseConnection = await mongoose.connect(process.env.MONGODB_URI);
    return mongooseConnection;
  } catch (error) {
    throw new Error("Error connecting to mongodb: " + error.message);
  }
};

module.exports = connectToDb;
