const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Food = mongoose.model("Food", {
  _id: Schema.Types.ObjectId,
  truckId: { type: Schema.Types.ObjectId, ref: "Truck" },
  category: String,
  name: String,
  price: Number,
  img: String
});

module.exports = { Food };
