// Importing modules
const mongoose = require("mongoose");
const crypto = require("crypto");

// Creating user schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
  photoUrl: {
    type: String,
  },
  password: {
    type: String,
    required:true
  },
});

module.exports = mongoose.model("User", UserSchema);
