/* Admin mongoose model */
const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  name: String,
  phone: Number,
  email: String,
  profileImg: String
});

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = { Admin };
