"use strict";
const log = console.log;

const { ObjectID } = require("mongodb");
const { UserAuth } = require("../models/UserAuth");
const { Truck } = require("../models/Truck");

const getTruck = (req, res) => {
  const truckId = req.params.id;

  if (!ObjectID.isValid(truckId)) {
    res.status(404).send();
  }

  Truck.findById(truckId).then((truck) => {
    if (!truck) {
      res.status(404).send();
    } else {
      res.send(truck);
    }
  }, (err) => {
    res.status(500).send(err);
  });
}

const addTruck = (req, res) => {
  const truckAuth = new UserAuth({
    username: req.body.username,
    password: req.body.password,
    role: "Truck",
  });

  truckAuth.save().then((result) => {
    const truck = new Truck({
      _id: result._id,
      name: result.username,
      phone: req.body.phone,
      email: req.body.email,
      location: req.body.location,
      cuisine: req.body.cuisine,
      time: req.body.time,
      profileImg: "./truck1.png",
    });

    truck.save().then((result) => {
      res.send(result);
    }, (err) => {
      res.status(500).send(err);
    })
  }, (err) => {
    res.status(500).send(err);
  });
}

const modifyTruck = (req, res) => {
  const truckId = req.params.id;
  log(req.body);

  if (!ObjectID.isValid(truckId)) {
    res.status(404).send();
  }

  const newTruck = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    location: req.body.location,
    cuisine: req.body.cuisine,
    time: req.body.time,
    profileImg: "./truck1.png",
  };

  Truck.findByIdAndUpdate(truckId, { $set: newTruck }, { new: true })
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

const deleteTruck = (req, res) => {
  const truckId = req.params.id;

  if (!ObjectID.isValid(truckId)) {
    res.status(404).send();
  }

  Truck.findByIdAndRemove(truckId).then((result) => {
    if (!result) {
      res.status(404).send();
    } else {
      res.send(result);
    }
  }, (err) => {
    res.status(500).send(err);
  });
}

const getAllTrucks = (req, res) => {
  Truck.find().then((trucks) => {
    res.send(trucks);
  }, (err) => {
    res.status(500).send(err);
  });
}

module.exports = { getTruck, addTruck, modifyTruck, deleteTruck, getAllTrucks }
