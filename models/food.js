const mongoose = require("mongoose");

const Food = mongoose.model("Food", {
  truckId: mongoose.Schema.Types.ObjectId,
  category: String,
  price: Number,
  name: String,
  price: Number,
  img: String
});

module.exports = { Food };
