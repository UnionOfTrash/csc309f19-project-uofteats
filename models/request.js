const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Request = mongoose.model("Request", {
  _id: Schema.Types.ObjectId,
  orderId: { type: Schema.Types.ObjectId, ref: "Order" },
  status: { type: Number, min: 0, max: 3 }
});

module.exports = { Request };
