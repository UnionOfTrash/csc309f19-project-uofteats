"use strict";
const log = console.log;

// START INITIALIZING DATABASE

// Loading environment variables based on current running environment
if (process.env.ENV == "PROD") {
  require("dotenv").config({ path: process.cwd() + "/.env_prod" });
  log(process.env.DB_URL); // Should be prod database
} else {
  require("dotenv").config({ path: process.cwd() + "/.env_dev" });
  log(process.env.DB_URL); // Shoule be dev database
}
const { mongoose } = require("./db/mongoose");

// Importing mongoose models
const { Order } = require("./models/order");

// For testing purpose only,
// we will wipe out the dev database and
// fill in some data.
if (process.env.ENV != "PROD") {
  mongoose.connection.dropDatabase();
  require("./db/initDb");
}

// END OF INITIALIZING DATABASE

// START INITIALIZING EXPRESS SERVER

// Start the express server
const express = require("express");
const { ObjectID } = require("mongodb");
const bodyParser = require("body-parser");
const session = require("express-session");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a session cookie
app.use(
  session({
    secret: "uofteats",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000000,
      httpOnly: true
    }
  })
);

// END OF INITIALIZING EXPRESS SERVER

// DEFINING ROUTES HERE
const userApi = require("./api/user");
const studentApi = require("./api/student");
const truckApi = require("./api/truck");
const foodApi = require("./api/food");

/*
 * Route(/api/login)
 * Method: POST
 * Required body: {
 *   username: String,
 *   password: String,
 * }
 */
app.post("/api/login", userApi.login);

/*
 * Route(/api/logout)
 * Method: GET
 */
app.get("/api/logout", userApi.logout);

/*
 * Route(/api/check-session)
 * Method: GET
 */
app.get("/api/check-session", userApi.check);

/*
 * Route(/api/student/{id})
 * Method: GET
 * Required parameters: {
 *   id: String,
 * }
 */
app.get(
  "/api/student/:id",
  userApi.authenticate("Student"),
  studentApi.getStudent
);

/*
 * Route(/api/student)
 * Method: POST
 * Required body: {
 *   username: String,
 *   password: String,
 *   email: String,
 * }
 */
app.post("/api/student", studentApi.addStudent);

/*
 * Route(/api/student/{id})
 * Method: PATCH
 * Required parameters: {
 *   id: String,
 * }
 * Required body: {
 *   name: String,
 *   phone: String,
 *   email: String,
 * }
 */
app.patch(
  "/api/student/:id",
  userApi.authenticate("Student"),
  studentApi.modifyStudent
);

/*
 * Route(/api/student/{id})
 * Method: DELETE
 * Required parameters: {
 *   id: String,
 * }
 */
app.delete(
  "/api/student/:id",
  userApi.authenticate("Student"),
  studentApi.deleteStudent
);

/*
 * Route(/api/students)
 * Method: GET
 * Only allow Admin to visit!
 */
app.get("/api/students", userApi.authenticate(""), studentApi.getAllStudents);

/*
 * Route(/api/truck/{id})
 * Method: GET
 * Required parameters: {
 *   id: String,
 * }
 */
app.get("/api/truck/:id", userApi.authenticate("All"), truckApi.getTruck);

/*
 * Route(/api/student)
 * Method: POST
 * Required body: {
 *   username: String,
 *   password: String,
 *   email: String,
 * }
 * Currently only allow Admin to visit!
 */
app.post("/api/truck", userApi.authenticate(""), truckApi.addTruck);

/*
 * Route(/api/truck/{id})
 * Method: PATCH
 * Required parameters: {
 *   id: String,
 * }
 * Required body: {
 *   name: String,
 *   phone: String,
 *   email: String,
 *   location: String,
 *   cuisine: String,
 *   time: String,
 * }
 */
app.patch(
  "/api/truck/:id",
  userApi.authenticate("Truck"),
  truckApi.modifyTruck
);

/*
 * Route(/api/truck/{id})
 * Method: DELETE
 * Required paramters: {
 *   id: String,
 * }
 */
app.delete(
  "/api/truck/:id",
  userApi.authenticate("Truck"),
  truckApi.deleteTruck
);

/*
 * Route(/api/trucks)
 * Method: GET
 */
app.get("/api/trucks", userApi.authenticate("All"), truckApi.getAllTrucks);

/*
 * Route(/api/food/{id})
 * Method: GET
 * Required parameters: {
 *   id: String,
 * }
 */
app.get("/api/food/:id", userApi.authenticate("All"), foodApi.getFood);

/*
 * Route(/api/food)
 * Method: POST
 * Required body: {
 *   name: String,
 *   price: Number,
 * }
 */
app.post("/api/food", userApi.authenticate("Truck"), foodApi.addFood);

/*
 * Route(/api/food/{id})
 * Method: PATCH
 * Required parameters: {
 *   id: String,
 * }
 * Required body: {
 *   name: String,
 *   price: Number,
 * }
 */
app.patch("/api/food/:id", userApi.authenticate("Truck"), foodApi.modifyFood);

/*
 * Route(/api/food/{id})
 * Method: DELETE
 * Required parameters: {
 *   id: String,
 * }
 */
app.delete("/api/food/:id", userApi.authenticate("Truck"), foodApi.deleteFood);

/*
 * Route(/api/foods/{truckId})
 * Method: GET
 * Required parameters: {
 *   truckId: String,
 * }
 */
app.get("/api/foods/:truckId", userApi.authenticate("All"), foodApi.getFoodsByTruck);

const authenticate = (req, res, next) => {
  next();
};

/** Food resource routes **/
app.get("/api/foods", (req, res) => {
  Food.find().then(
    foods => {
      res.send({ foods });
    },
    error => {
      res.status(500).send(error); // server error
    }
  );
});

app.get("/api/foods/:truckId", (req, res) => {
  /// req.params has the wildcard parameters in the url, in this case, id.
  // log(req.params.id)
  const truckId = req.params.truckId;

  if (!ObjectID.isValid(truckId)) {
    res.status(404).send(); // if invalid id, definitely can't find resource, 404.
  }

  // Otherwise, find by the id and creator
  Food.find({ truckId: truckId })
    .then(foods => {
      if (!foods) {
        res.status(404).send(); // could not find this student
      } else {
        res.send({ foods });
      }
    })
    .catch(error => {
      res.status(500).send(error); // server error
    });
});

// /** Order resource routes **/
app.post("/api/orders", authenticate, (req, res) => {
  // log(req.body)

  // Create a new order using the Order mongoose model

  const order = new Order({
    _id: new mongoose.Types.ObjectId(),
    customerId: req.user._id,
    truckId: req.body.truckId,
    food: req.body.food,
    price: req.body.price,
    pickDate: req.body.pickDate,
    pickTime: req.body.pickTime,
    noteContent: req.body.noteContent,
    status: req.body.status
  });

  // Save order to the database
  order.save().then(
    result => {
      res.send(result);
    },
    error => {
      res.status(400).send(error); // 400 for bad request
    }
  );
});

// a GET route to get all orders of a user
app.get("/api/orders", authenticate, (req, res) => {
  Order.find({
    customerId: req.user._id // from authenticate middleware
  }).then(
    orders => {
      res.send({ orders }); // can wrap in object if want to add more properties
    },
    error => {
      res.status(500).send(error); // server error
    }
  );
});

// a GET route to get orders by customer id.
// id is treated as a wildcard parameter, which is why there is a colon : beside it.
app.get("/api/orders/:id", authenticate, (req, res) => {
  /// req.params has the wildcard parameters in the url, in this case, id.
  // log(req.params.id)
  const id = req.params.id;

  if (!ObjectID.isValid(id)) {
    res.status(404).send(); // if invalid id, definitely can't find resource, 404.
  }

  // Otherwise, find by the id and creator
  Order.find({ customerId: id })
    .then(orders => {
      if (!orders) {
        res.status(404).send(); // could not find this student
      } else {
        res.send(orders);
      }
    })
    .catch(error => {
      res.status(500).send(); // server error
    });
});

/*** Webpage routes below **********************************/
// Serve the build
app.use(express.static(__dirname + "/client/build"));

// All routes other than above will go to index.html
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

/*************************************************/
// Express server listening...
const port = process.env.PORT || 5000;
app.listen(port, () => {
  log(`Listening on port ${port}...`);
});
