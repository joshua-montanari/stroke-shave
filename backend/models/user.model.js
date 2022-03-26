const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  password: { type: String, required: true, minlength: 5 },
  username: { type: String, required: true, unique: true, minlength: 3 },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
