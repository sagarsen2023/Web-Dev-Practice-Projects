const express = require("express");
const ownerRouter = express.Router();
const ownerModel = require("../models/owner.model");
const responseHandler = require("../utils/response-handler");
const bcryptJs = require("bcryptjs");

// Completed
ownerRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error("Please provide email and password");
    }
    const owner = await ownerModel.findOne({ email });
    if (owner) {
      return bcryptJs.compareSync(password, owner.password)
        ? res.status(200).send(
            responseHandler.successResponse({
              data: owner,
            })
          )
        : res.status(200).send(
            responseHandler.errorResponse({
              message: "Please enter correct credentials.",
            })
          );
    } else {
      return res.status(200).send(
        responseHandler.successResponse({
          data: {
            message: "No owner exists! Please create a new owner!",
          },
        })
      );
    }
  } catch (error) {
    return res.status(400).send(
      responseHandler.errorResponse({
        statusCode: 400,
        message: error.message ?? "An unexpected error occurred!",
      })
    );
  }
});

// Completed
ownerRouter.post("/sign-up", async (req, res) => {
  try {
    const owners = await ownerModel.find({});
    if (owners.length > 0) {
      return res.status(503).send(
        responseHandler.errorResponse({
          statusCode: 503,
          message: "An owner already exists! No other owner is allowed.",
        })
      );
    }
    const { fullName, email, password } = req.body;
    const salt = bcryptJs.genSaltSync(10);
    const hashedPassword = bcryptJs.hashSync(password, salt);
    const newOwner = await ownerModel.create({
      fullName,
      email,
      password: hashedPassword,
    });
    res.status(201).send(
      responseHandler.successResponse({
        data: newOwner,
      })
    );
  } catch (error) {
    res.status(400).send(
      responseHandler.errorResponse({
        statusCode: 400,
        message: error.message ?? "An unexpected error occurred!",
      })
    );
  }
});

module.exports = ownerRouter;
