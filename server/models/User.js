/* User mongoose model */
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    id: Number,
    name: String,
    phone: Number,
	email: String,
    profileImg: String
})

const User = mongoose.model('User', UserSchema)

module.exports = { User }