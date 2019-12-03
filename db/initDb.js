const log = console.log;
const mongoose = require("mongoose");
const { userAuth } = require("../models/UserAuth");

// Add a new admin
const admin = new userAuth({
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
