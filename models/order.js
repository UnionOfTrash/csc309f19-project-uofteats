const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderFood = new mongoose.Schema({
  foodId: { type: Schema.Types.ObjectId, ref: "Food" },
  quantity: Number
});

const Order = mongoose.model("Order", {
  _id: Schema.Types.ObjectId,
  customerId: { type: Schema.Types.ObjectId, ref: "Customer" },
  truckId: { type: Schema.Types.ObjectId, ref: "Truck" },
  food: [OrderFood],
  price: Number,
  pickDate: String,
  pickTime: String,
  noteContent: String
});

module.exports = { Order };
