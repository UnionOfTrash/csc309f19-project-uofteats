"use strict";
const log = console.log;

const { UserAuth } = require("../models/UserAuth");

const login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  UserAuth.findByUsernamePassword(username, password)
    .then((user) => {
      if (!user) {
        res.status(404).send();
      } else {
        req.session.userID = user._id;
        res.send({ role: user.role });
      }
    }, (err) => {
      res.status(400).send(err);
    });
};

const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send();
    }
  });
};

const check = (req, res) => {
  if (req.session.userID) {
    UserAuth.findById(req.session.userID).then((user) => {
      if (!user) {
        res.status(500).send();
      } else {
        res.send({ username: user.username, role: user.role });
      }
    }, (err) => {
      res.status(500).send(err);
    });
  } else {
    res.status(401).send("Unauthorized");
  }
}

// Middleware for authentication of resources
const authenticate = (role) => (req, res, next) => {
  if (req.session.userID) {
    UserAuth.findById(req.session.userID).then((user) => {
      if (!user) {
        return Promise.reject();
      } else {
        if ((role == "All") || (user.role == "Admin") || (user.role == role)) {
          next();
        } else {
          res.status(401).send("Unauthorized");
        }
      }
    }, (err) => {
      res.status(500).send(err);
    })
  } else {
    res.status(401).send("Unauthorized");
  }
}

module.exports = { login, logout, check, authenticate };
