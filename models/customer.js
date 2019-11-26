const mongoose = require("mongoose");
const { Schema } = mongoose.Schema;

const userSchema = new Schema({
  userId: mongoose.Schema.Types.ObjectId,
  username: String,
  name: String,
  phone: String,
  email: String,
  profileImg: String
});

mongoose.model("users", userSchema);

module.exports = { Student };
