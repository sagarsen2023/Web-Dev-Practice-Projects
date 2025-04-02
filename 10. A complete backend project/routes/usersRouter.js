const express = require("express");
const usersRouter = express.Router();

usersRouter.get("/", (req, res) => {
  res.send("At /user/");
});

module.exports = usersRouter;
