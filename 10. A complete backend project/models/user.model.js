const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  cart: {
    type: Array,
    default: [],
  },
  isAdmin: Boolean,
  orders: Array,
  contact: Number,
  picture: String,
});

const user = mongoose.model("user", userSchema);
module.exports = user;
