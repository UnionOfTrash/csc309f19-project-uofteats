"use strict";
const log = console.log;

const { ObjectID } = require("mongodb");
const { Food } = require("../models/Food");

const getFood = (req, res) => {
  const id = req.params.id;

  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }

  Food.findById(id).then(
    food => {
      if (!food) {
        res.status(404).send();
      } else {
        res.send(food);
      }
    },
    err => {
      res.status(500).send(err);
    }
  );
};

const addFood = (req, res) => {
  const cata = req.body.category;
  let fimg;
  if (cata === "HotDog") {
    fimg = "./ChickenHotDog.jpeg";
  } else if (cata === "Drink") {
    fimg = "./Water.jpeg";
  } else if (cata == "Poutine") {
    fimg = "./Poutine.jpg";
  } else {
    fimg = "./star.png";
  }

  const food = new Food({
    truckId: req.body.truckId,
    name: req.body.name,
    price: req.body.price,
    category: cata,
    img: fimg
  });

  food.save().then(
    result => {
      res.send(result);
    },
    err => {
      res.status(500).send(err);
    }
  );
};

const modifyFood = (req, res) => {
  const id = req.params.id;

  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }

  const newFood = {
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    img: req.body.img
  };

  Food.findByIdAndUpdate(id, { $set: newFood }, { new: true }).then(
    result => {
      if (!result) {
        res.status(404).send();
      } else {
        res.send(result);
      }
    },
    err => {
      res.status(500).send(err);
    }
  );
};

const deleteFood = (req, res) => {
  const id = req.params.id;

  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }

  Food.findByIdAndRemove(id).then(
    result => {
      if (!result) {
        res.status(404).send();
      } else {
        res.send(result);
      }
    },
    err => {
      res.status(500).send(err);
    }
  );
};

const getFoodsByTruck = (req, res) => {
  const truckId = req.params.truckId;

  if (!ObjectID.isValid(truckId)) {
    res.status(404).send();
  }

  Food.find({ truckId: truckId }).then(
    result => {
      if (!result) {
        res.status(404).send();
      } else {
        res.send(result);
      }
    },
    err => {
      res.status(500).send(err);
    }
  );
};

module.exports = { getFood, addFood, modifyFood, deleteFood, getFoodsByTruck };
