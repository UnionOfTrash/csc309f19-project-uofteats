"use strict";

const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  truckId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Truck",
  },
  name: {
    type: String,
    require: true,
    minlength: 1,
  },
  price: {
    type: Number,
    require: true,
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
