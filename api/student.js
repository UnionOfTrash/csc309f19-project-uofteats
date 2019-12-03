"use strict";
const log = console.log;

const { ObjectID } = require("mongodb");
const { UserAuth } = require("../models/UserAuth");
const { Student } = require("../models/Student");

const getStudent = (req, res) => {
  const studentId = req.params.id;

  if (!ObjectID.isValid(studentId)) {
    res.status(404).send();
  }

  Student.findById(studentId).then((student) => {
    if (!student) {
      res.status(404).send();
    } else {
      res.send(student);
    }
  }, (err) => {
    res.status(500).send(err);
  })
}

const addStudent = (req, res) => {
  const studentAuth = new UserAuth({
    username: req.body.username,
    password: req.body.password,
    role: "Student",
  });

  studentAuth.save().then((result) => {
    const student = new Student({
      _id: result._id,
      name: result.username,
      phone: req.body.phone,
      email: req.body.email,
      profileImg: "./user.png",
    });

    student.save().then((result) => {
      res.send(result);
    }, (err) => {
      res.status(500).send(err);
    })
  }, (err) => {
    res.status(500).send(err);
  })
}

const modifyStudent = (req, res) => {
  const studentId = req.params.id;

  if (!ObjectID.isValid(studentId)) {
    res.status(404).send();
  }

  const newStudent = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    profileImg: "./user.png"
  };

  Student.findByIdAndUpdate(id, { $set: newStudent }, { new: true })
    .then((result) => {
      if (!result) {
        res.status(404).send();
      } else {
        res.send(result);
      }
    }, (err) => {
      res.status(500).send(err);
    });
}

const getAllStudents = (req, res) => {
  Student.find().then((students) => {
    res.send(students);
  }, (err) => {
    res.status(500).send(err);
  });
};

module.exports = { getStudent, addStudent, modifyStudent, getAllStudents }
