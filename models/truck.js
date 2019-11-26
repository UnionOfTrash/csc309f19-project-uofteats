/* Foodtruck mongoose model */
const mongoose = require("mongoose");

const TruckSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  name: String,
  phone: Number,
  email: String,
  location: String,
  description: String,
  profileImg: String
});

const Truck = mongoose.model("Foodtruck", TruckSchema);

module.exports = { Truck };
