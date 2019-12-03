"use strict";
const log = console.log;

const { UserAuth } = require("../models/UserAuth");

const login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  UserAuth.findByUsernamePassword(username, password)
    .then((user) => {
      if (!user) {
        res.status(404).send("User not found");
      } else {
        req.session.user = user._id;
        req.session.username = user.username;
        res.send({ role: user.role });
      }
    }, (err) => {
      res.status(400).send(err);
    });
};

module.exports = { login };