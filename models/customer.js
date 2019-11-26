const mongoose = require("mongoose");
const { Schema } = mongoose.Schema;

const customerSchema = new Schema({
  userId: mongoose.Schema.Types.ObjectId,
  username: String,
  name: String,
  phone: String,
  email: String,
  profileImg: String
});

mongoose.model("Customer", customerSchema);

module.exports = { Customer };
