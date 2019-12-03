const log = console.log;
const mongoose = require("mongoose");
const { UserAuth } = require("../models/UserAuth");
const { Student } = require("../models/Student");

// Add a new admin
const admin = new UserAuth({
  username: "admin",
  password: "admin",
  role: "Admin",
});

admin.save().then((res) => {
  log("Successfully added admin");
  log(res);
}, (err) => {
  log("Error when adding admin");
  log(err);
});

// Add a new Student
const studentAuth = new UserAuth({
  username: "user0",
  password: "user0",
  role: "Student",
});

studentAuth.save().then((res0) => {
  const student = new Student({
    _id: res0._id,
    name: "Tom Fairgrieve",
    phone: "6470000001",
    email: "tom@gmail.com",
    profileImg: "./user.png",
  });

  student.save().then((res1) => {
    log("Successfully added a student");
    log(res0);
    log(res1);
  }, (err) => {
    log("Error when adding a student");
    log(err);
  })
}, (err) => {
  log("Error when adding a student");
  log(err);
});
