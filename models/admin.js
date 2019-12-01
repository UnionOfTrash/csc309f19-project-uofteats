/* Admin mongoose model */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new mongoose.Schema({
  _id: { type: Schema.Types.ObjectId, ref: "UserAuth" },
  name: String,
  phone: Number,
  email: String,
  profileImg: String
});

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = { Admin };
