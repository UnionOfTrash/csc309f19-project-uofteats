"use strict";
const log = console.log;

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
const { userAuth } = require("./models/UserAuth");
const { Order } = require("./models/order");
const { Food } = require("./models/food");
const { Customer } = require("./models/customer");
const { Truck } = require("./models/truck");
const { Request } = require("./models/request");

const express = require("express");
// starting the express server
const app = express();

// empty database and initialize some data
mongoose.connection.dropDatabase();
require("./initial_data/initData");

// to validate object IDs
const { ObjectID } = require("mongodb");

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// express-session for managing user sessions
const session = require("express-session");
app.use(bodyParser.urlencoded({ extended: true }));

/*** Session handling **************************************/
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

// A route to login and create a session
app.post("/api/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  log(username, password);
  // Use the static method on the User model to find a user
  // by their email and password
  userAuth.findByUsernamePassword(username, password)
    .then(user => {
      if (!user) {
        log("User not found");
        // res.redirect('/');
      } else {
        // Add the user's id to the session cookie.
        // We can check later if this exists to ensure we are logged in.
        log("SESSION!");
        req.session.user = user._id;
        res.send({ screen: "logged in" });
      }
    })
    .catch(error => {
      log(400);
      // res.status(400).redirect('/');
    });
});

// A route to logout a user
app.get("/api/logout", (req, res) => {
  // Remove the session
  req.session.destroy(error => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.redirect("/login");
    }
  });
});

// A route to check if a use is logged in on the session cookie
app.get("/api/check-session", (req, res) => {
  // Remove the session
  if (req.session.user) {
    res.send(req.session.user);
  } else {
    res.redirect("/login");
  }
});

// Middleware for authentication of resources
const authenticate = (req, res, next) => {
  if (req.session.user) {
    userAuth.findById(req.session.user)
      .then(user => {
        if (!user) {
          return Promise.reject();
        } else {
          req.user = user;
          next();
        }
      })
      .catch(error => {
        res.status(401).send("Unauthorized");
      });
  } else {
    res.status(401).send("Unauthorized");
  }
};

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
    Customer.findById(id).then(
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
  const user = new userAuth({
    _id: new mongoose.Types.ObjectId(),
    username: req.body.username,
    password: req.body.password,
    type: "u"
  });

  // Save the user
  user
    .save()
    .then(result => {
      const newUser = new Customer({
        _id: result._id,
        name: req.body.name,
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

// get all userAuth
app.get("/api/admin/userAuth", authenticate, (req, res) => {
  userAuth.find()
    .then(result => {
      res.send(result);
    })
    .catch(e => res.status(400).send(e));
});

// get all users
app.get("/api/admin/users", authenticate, (req, res) => {
  Customer.find().then(
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
  const user = new userAuth({
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
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        profileImg: "./truck1.png"
      });

      truck.save().then(result => res.send(result));
    })
    .catch(e => res.status(500).send(e));
});

// delete a customer
app.delete("/api/admin/users/:id", authenticate, (req, res) => {
  const id = req.params.id;
  if (!ObjectID.isValid(id)) {
    res.status(500).send("invalid id");
  }
  Customer.findByIdAndDelete(id)
    .then(result => {
      if (!result) {
        res.status(404).send("could not find the user");
      } else {
        userAuth.findByIdAndDelete(id).then(result => {
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

  FoodTruck.findByIdAndDelete(id)
    .then(result => {
      if (!result) {
        res.status(404).send("could not find the foodtruck");
      } else {
        userAuth.findByIdAndDelete(id).then(result => {
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

// change some properties of a user
app.patch("/api/admin/users/:id", authenticate, (req, res) => {
  const id = req.params.id;
  if (!ObjectID.isValid(id)) {
    res.status(500).send("invalid user id");
  }

  const customer = {
    _id: req.body.id,
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    profileImg: "./user.png"
  };

  Customer.findByIdAndUpdate(id, { $set: customer }, { new: true })
    .then(result => {
      if (!result) {
        res.status(404).send("could not find the customer");
      } else {
        res.send(result);
      }
    })
    .catch(e => res.status(400).send(error));
});

// change the properties of a food truck
app.patch("/api/admin/fts/:id", authenticate, (req, res) => {
  const id = req.params.id;
  if (!ObjectID.isValid(id)) {
    res.status(500).send("invalid user id");
  }

  const truck = {
    _id: req.body.id,
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
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
