const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  products: {
    type: Array,
    default: [],
  },
  picture: String,
  gstIn: String,
});

const owner = mongoose.model("owner", ownerSchema);
module.exports = owner;
