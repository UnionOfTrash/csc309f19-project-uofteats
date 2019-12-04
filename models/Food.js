"use strict";

const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  truckId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Truck",
    required: true,
  },
  name: {
    type: String,
    required: true,
    minlength: 1,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
  },
  img: {
    type: String,
  },
});

const Food = mongoose.model("Food", FoodSchema);

module.exports = { Food };
