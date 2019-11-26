const mongoose = require("mongoose");

const OrderFood = new mongoose.Schema({
  foodId: mongoose.Schema.Types.ObjectId,
  quantity: Number
});

const Order = mongoose.model("Order", {
  customerId: mongoose.Schema.Types.ObjectId,
  truckId: mongoose.Schema.Types.ObjectId,
  food: [OrderFood],
  price: Number,
  pickDate: String,
  pickTime: String,
  noteContent: String
});

module.exports = { Order };
