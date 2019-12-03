"use strict";

const mongoose = require("mongoose");

const TruckSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserAuth",
  },
  name: {
    type: String,
    required: true,
    minlength: 1,
  },
  phone: {
    type: String,
    minlength: 10,
  },
  email: {
    type: String,
  },
  location: {
    type: String,
  },
  cuisine: {
    type: String,
  },
  time: {
    type: String,
  },
  profileImg: {
    type: String,
  },
});

const Truck = mongoose.model("Truck", TruckSchema);

module.exports = { Truck };
