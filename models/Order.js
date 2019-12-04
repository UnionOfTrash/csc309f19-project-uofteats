"use strict";

const mongoose = require("mongoose");

const OrderFoodSchema = new mongoose.Schema({
  foodId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Food",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const OrderSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  truckId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Truck",
    required: true,
  },
  food: {
    type: [OrderFoodSchema],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  pickDate: {
    type: String,
    required: true,
  },
  pickTime: {
    type: String,
    required: true,
  },
  noteContent: {
    type: String,
  },
  status: {
    type: Number,
    max: 3,
    min: 0,
  },
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = { Order };
