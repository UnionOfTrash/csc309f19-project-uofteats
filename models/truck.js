/* Foodtruck mongoose model */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TruckSchema = new mongoose.Schema({
  _id: { type: Schema.Types.ObjectId, ref: "UserAuth" },
  name: String,
  phone: Number,
  email: String,
  location: String,
  type: String,
  time: String,
  profileImg: String
});

const Truck = mongoose.model("Truck", TruckSchema);

module.exports = { Truck };
