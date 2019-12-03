"use strict";

const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
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
    profileImg: {
        type: String,
    },
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = { Student };
