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
const { UserAuth } = require("./models/UserAuth");
const { Student } = require("./models/Student");
const { Order } = require("./models/order");
const { Food } = require("./models/food");
const { Truck } = require("./models/truck");
const { Request } = require("./models/request");

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
      httpOnly: true,
    },
  })
);

// END OF INITIALIZING EXPRESS SERVER


// DEFINING ROUTES HERE
const userApi = require("./api/user");
const studentApi = require("./api/student");

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
app.get("/api/student/:id", userApi.authenticate("Student"), studentApi.getStudent);

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
 * Required paramaters: {
 *   id: String,
 * }
 * Required body: {
 *   name: String,
 *   phone: String,
 *   email: String,
 * }
 */
app.patch("/api/student/:id", userApi.authenticate("Student"), studentApi.modifyStudent);

app.get("/api/students", userApi.authenticate(""), studentApi.getAllStudents);

const authenticate = (req, res, next) => {
  next();
}

/*********************************************************/

/*** API Routes below ************************************/
/** Truck resource routes**/
app.get("/api/trucks", (req, res) => {
  Truck.find().then(
    trucks => {
      res.send({ trucks });
    },
    error => {
      res.status(500).send(error); // server error
    }
  );
});

app.get("/api/trucks/:id", (req, res) => {
  /// req.params has the wildcard parameters in the url, in this case, id.
  // log(req.params.id)
  const id = req.params.id;

  if (!ObjectID.isValid(id)) {
    res.status(404).send(); // if invalid id, definitely can't find resource, 404.
  }

  // Otherwise, find by the id and creator
  Truck.findOne({ _id: id })
    .then(truck => {
      if (!truck) {
        res.status(404).send(); // could not find this student
      } else {
        res.send(truck);
      }
    })
    .catch(error => {
      res.status(500).send(); // server error
    });
});

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
    noteContent: req.body.noteContent
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

/** Request routes below **/
app.post("/api/requests", authenticate, (req, res) => {
  // log(req.body)
  // Create a new order using the Order mongoose model
  const request = new Request({
    _id: new mongoose.Types.ObjectId(),
    orderId: req.body.orderId,
    status: 0
  });

  // Save order to the database
  request.save().then(
    result => {
      res.send(result);
    },
    error => {
      res.status(400).send(error); // 400 for bad request
    }
  );
});

/** User routes below **/
// Set up a POST route to *create* a user of your web app.

app.get("/api/users/:id", authenticate, (req, res) => {
  const id = req.params.id;
  console.log(id);
  if (!ObjectID.isValid(id)) {
    res.status(404).send("Invalid Id");
  } else {
    Student.findById(id).then(
      user => {
        console.log(user);
        res.send(user);
      },
      err => {
        res.status(500).send(err);
      }
    );
  }
});

app.post("/api/users", (req, res) => {
  log(req.body);

  // Create a new user
  const user = new UserAuth({
    _id: new mongoose.Types.ObjectId(),
    username: req.body.username,
    password: req.body.password,
    type: "u"
  });

  // Save the user
  user
    .save()
    .then(result => {
      const newUser = new Student({
        _id: result._id,
        name: result.username,
        phone: req.body.phone,
        email: req.body.email,
        profileImg: "./user.png"
      });

      newUser.save().then(result => {
        res.send(result);
      });
    })
    .catch(e => res.status(500).send(e));
});

/*
    APIs for admin use:
*/

// get all UserAuth
app.get("/api/admin/UserAuth", authenticate, (req, res) => {
  UserAuth.find()
    .then(result => {
      res.send(result);
    })
    .catch(e => res.status(400).send(e));
});

// get all users
app.get("/api/admin/users", authenticate, (req, res) => {
  Student.find().then(
    result => {
      res.send(result);
    },
    error => {
      res.status(500).send(error);
    }
  );
});

// get all foodtrucks
app.get("/api/admin/fts", authenticate, (req, res) => {
  Truck.find().then(
    result => {
      res.send(result);
    },
    error => {
      res.status(500).send(error);
    }
  );
});

// add a food truck
app.post("/api/admin/fts", authenticate, (req, res) => {
  const user = new UserAuth({
    _id: new mongoose.Types.ObjectId(),
    username: req.body.username,
    password: req.body.password,
    type: req.body.type
  });

  user
    .save()
    .then(u => {
      const truck = new Truck({
        _id: u._id,
        name: u.username,
        phone: req.body.phone,
        email: req.body.email,
        location: req.body.location,
        type: req.body.type,
        time: req.body.time,
        profileImg: "./truck1.png"
      });

      truck.save().then(result => res.send(result));
    })
    .catch(e => res.status(500).send(e));
});

// delete a student
app.delete("/api/admin/users/:id", authenticate, (req, res) => {
  const id = req.params.id;
  if (!ObjectID.isValid(id)) {
    res.status(500).send("invalid id");
  }
  Student.findByIdAndDelete(id)
    .then(result => {
      if (!result) {
        res.status(404).send("could not find the user");
      } else {
        UserAuth.findByIdAndDelete(id).then(result => {
          if (!result) {
            res.status(404).send("could not find the user");
          } else {
            res.send(result);
          }
        });
      }
    })
    .catch(e => res.status(500).send(e));
});

// delete a food truck
app.delete("/api/admin/fts/:id", authenticate, (req, res) => {
  const id = req.params.id;
  if (!ObjectID.isValid(id)) {
    res.status(500).send("invalid ft id");
  }

  Truck.findByIdAndDelete(id)
    .then(result => {
      if (!result) {
        res.status(404).send("could not find the foodtruck");
      } else {
        UserAuth.findByIdAndDelete(id).then(result => {
          if (!result) {
            res.status(500).send("could not find the user");
          } else {
            res.send(result);
          }
        });
      }
    })
    .catch(error => res.status(500).send(error));
});

// change the properties of a food truck
app.patch("/api/admin/fts/:id", authenticate, (req, res) => {
  const id = req.params.id;
  if (!ObjectID.isValid(id)) {
    res.status(500).send("invalid user id");
  }

  const truck = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    location: req.body.location,
    type: req.body.type,
    time: req.body.time,
    profileImg: "./truck1.png"
  };

  Truck.findByIdAndUpdate(id, { $set: truck }, { new: true })
    .then(result => {
      if (!result) {
        res.status(404).send("could not find the truck");
      } else {
        res.send(result);
      }
    })
    .catch(e => res.status(400).send(error));
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
