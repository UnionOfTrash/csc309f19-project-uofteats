/* Foodtruck mongoose model */
const mongoose = require('mongoose')

const FoodtruckSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    email: String,
    location: String,
    description: String,
    profileImg: String
})

const Foodtruck = mongoose.model('Foodtruck', FoodtruckSchema)

module.exports = { Foodtruck }