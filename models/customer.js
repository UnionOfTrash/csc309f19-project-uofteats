"use strict";

const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  _id: {
    type: Schema.Types.ObjectId,
    ref: "UserAuth",
  },
  name: {
    type: String,
    required: true,
    minlength: 1,
  },
  phone: {
    type: String,
    required: false,
    minlength: 10,
  },
  email: {
    type: String,
    require: false,
    minlength: 1,
  },
  profileImg: {
    type: String,
    required: false,
  },
});

const customer = mongoose.model("Customer", customerSchema);

module.exports = { customer };
