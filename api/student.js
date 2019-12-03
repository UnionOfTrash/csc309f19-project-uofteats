"use strict";
const log = console.log;

const { Student } = require("../models/Student");

const getAllStudents = (req, res) => {
    Student.find().then((students) => {
        res.send(students);
    }, (err) => {
        res.status(500).send(err);
    });
};

module.exports = { getAllStudents }
