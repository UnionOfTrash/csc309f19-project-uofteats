"use strict";
const log = console.log;

const { ObjectID } = require("mongodb");
const { Order } = require("../models/Order");

const getOrder = (req, res) => {
  const id = req.params.id;

  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }

  Order.findById(id).then((order) => {
    if (!order) {
      res.status(404).send();
    } else {
      res.send(order);
    }
  }, (err) => {
    res.status(500).send(err);
  });
}

const addOrder = (req, res) => {
  const order = new Order({
    customerId: req.body.customerId,
    truckId: req.body.truckId,
    food: req.body.food,
    price: req.body.price,
    pickDate: req.body.pickDate,
    pickTime: req.body.pickTime,
    noteContent: req.body.noteContent,
    status: 0,
  });

  order.save().then((result) => {
    res.send(result);
  }, (err) => {
    res.status(500).send(err);
  });
}

const modifyOrder = (req, res) => {
  const id = req.params.id;

  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }

  const newOrder = {
    status: req.body.status
  };

  Order.findByIdAndUpdate(id, { $set: newOrder }, { new: true})
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

const getOrderByUser = (req, res) => {
  const studentId = req.params.studentId;

  if (!ObjectID.isValid(studentId)) {
    res.status(404).send();
  }

  Order.find({ customerId: studentId }).then((result) => {
    if (!result) {
      res.status(404).send();
    } else {
      res.send(result);
    }
  }, (err) => {
    res.status(500).send(err);
  });
}

const getOrderByTruck = (req, res) => {
  const truckId = req.params.truckId;

  if (!ObjectID.isValid(truckId)) {
    res.status(404).send();
  }

  Order.find({ truckId: truckId }).then((result) => {
    if (!result) {
      res.status(404).send();
    } else {
      res.send(result);
    }
  }, (err) => {
    res.status(500).send(err);
  });
}

module.exports = { getOrder, addOrder, modifyOrder, getOrderByUser, getOrderByTruck };
