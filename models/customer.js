const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, ref: "UserAuth" },
  name: String,
  phone: String,
  email: String,
  profileImg: String
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = { Customer };
