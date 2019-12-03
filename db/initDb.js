const log = console.log;
const mongoose = require("mongoose");
const { UserAuth } = require("../models/UserAuth");
const { Student } = require("../models/Student");
const { Truck } = require("../models/truck");

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


// initialize a new truck
const truck = new UserAuth({
  _id: new mongoose.Types.ObjectId(),
  username: "user2",
  password: "user2",
  type: "ft"
});

truck.save().then(res0 => {

  const t = new Truck({
    _id: truck._id,
    name: "Ideal Catering",
    email: "idealcatering@gmail.com",
    phone: "6470000002",
    location: "Bahen Centre for Information Technology",
    type: "• American • Fast Food • Hot Dogs",
    time: "9:00 AM - 9:00 PM",
    profileImg: "./truck1.png"
  })

  t.save().then( res1 => {
    log("Successfully added a student");
    log(res0);
    log(res1);
  }, err => {
    log("Error when adding a student");
    log(err);
  }).catch(e => log(e))

});
