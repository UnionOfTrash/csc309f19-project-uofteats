const { UserAuth } = require("../models/userAuth");

new UserAuth({
  username: "admin",
  password: "admin",
  type: 0
}).save();

new UserAuth({
  username: "user",
  password: "user",
  type: 1
}).save();

new UserAuth({
  username: "user2",
  password: "user2",
  type: 2
}).save();
