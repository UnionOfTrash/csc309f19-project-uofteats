const log = console.log;
const mongoose = require("mongoose");
const { UserAuth } = require("../models/UserAuth");
const { Student } = require("../models/Student");
const { Truck } = require("../models/Truck");

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


// add a new truck
const truckAuth = new UserAuth({
  username: "user1",
  password: "user1",
  role: "Truck",
});

truckAuth.save().then((res0) => {
  const truck = new Truck({
    _id: res0._id,
    name: "Ideal Catering",
    email: "idealcatering@gmail.com",
    phone: "6470000002",
    location: "Bahen Centre for Information Technology",
    cuisine: "• American • Fast Food • Hot Dogs",
    time: "9:00 AM - 9:00 PM",
    profileImg: "./truck1.png"
  });

  truck.save().then((res1) => {
    log("Successfully added a truck");
    log(res0);
    log(res1);
  }, (err) => {
    log("Error when adding a truck");
    log(err);
  })
}, (err) => {
  log("Error when adding a truck");
  log(err);
});
