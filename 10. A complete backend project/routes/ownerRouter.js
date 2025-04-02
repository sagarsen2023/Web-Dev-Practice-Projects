const express = require("express");
const ownerRouter = express.Router();

ownerRouter.get("/", (req, res) => {
  res.send("At /owner/");
});

module.exports = ownerRouter;
