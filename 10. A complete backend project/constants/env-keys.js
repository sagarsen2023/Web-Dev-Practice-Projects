require("dotenv").config();

const envKeys = {
  mongoDbUri: process.env.MONGODB_URI,
  serverPort: process.env.PORT || 8080,
};

module.exports = envKeys;
