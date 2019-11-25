/* Order mongoose model */
const mongoose = require('mongoose')

const FoodSchema = new mongoose.Schema({
    id: Number,
    quantity: Number
})


const OrderSchema = new mongoose.Schema({
    id: Number,
    customerId: Number,
    truckId: Number,
    food: [FoodSchema],
    price: Number,
    pickDate: String,
    pickTime: String,
    noteContent: string
})

const Order = mongoose.model('Order', OrderSchema)

module.exports = { Order }