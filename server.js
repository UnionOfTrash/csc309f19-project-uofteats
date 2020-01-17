"use strict";
const log = console.log;

// START INITIALIZING DATABASE

const { mongoose } = require("./db/mongoose");

// For testing purpose only,
// we will wipe out the dev database and fill in some data.
if (process.env.ENV != "PROD") {
  mongoose.connection.dropDatabase();
  require("./db/initDb");
}

// END OF INITIALIZING DATABASE

// START INITIALIZING EXPRESS SERVER

// Start the express server
const express = require("express");
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
const orderApi = require("./api/order");

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
app.get("/api/student/:id", userApi.authenticate("All"), studentApi.getStudent);

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
app.patch("/api/student/:id", userApi.authenticate("Student"), studentApi.modifyStudent);

/*
 * Route(/api/student/{id})
 * Method: DELETE
 * Required parameters: {
 *   id: String,
 * }
 */
app.delete("/api/student/:id", userApi.authenticate("Student"), studentApi.deleteStudent);

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
app.patch("/api/truck/:id", userApi.authenticate("Truck"), truckApi.modifyTruck);

/*
 * Route(/api/truck/{id})
 * Method: DELETE
 * Required paramters: {
 *   id: String,
 * }
 */
app.delete("/api/truck/:id", userApi.authenticate("Truck"), truckApi.deleteTruck);

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

/*
 * Route(/api/order/{id})
 * Method: GET
 * Required paramters: {
 *   id: String,
 * }
 */
app.get("/api/order/:id", userApi.authenticate("All"), orderApi.getOrder);

/*
 * Route(/api/order)
 * Method: POST
 * Required body: {
 *   customerId: String,
 *   truckId: String,
 *   food: List,
 *   price: Number,
 *   pickDate: String,
 *   pickTime: String,
 *   noteContent: String,
 * }
 */
app.post("/api/order", userApi.authenticate("Student"), orderApi.addOrder);

/*
 * Route(/api/order/{id})
 * Method: PATCH
 * Required parameters: {
 *   id: String,
 * }
 * Required body: {
 *   status: Number,
 * }
 */
app.patch("/api/order/:id", userApi.authenticate("All"), orderApi.modifyOrder);

/*
 * Route(/api/orderbyuser/{studentId})
 * Method: GET
 * Required parameters: {
 *  id: String,
 * }
 */
app.get("/api/order/s/:studentId", userApi.authenticate("Student"), orderApi.getOrderByUser);

/*
 * Route(/api/orderbutruck/{truckId})
 * Method: GET
 * Required parameters: {
 *   id: String,
 * }
 */
app.get("/api/order/t/:truckId", userApi.authenticate("Truck"), orderApi.getOrderByTruck);

/*** Webpage routes below **********************************/
// Serve the build
app.use(express.static(__dirname + "/client/build"));

// All routes other than above will go to index.html
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

/*************************************************/
// Express server listening...
const port = process.env.PORT || 3000;
app.listen(port, () => {
  log(`Listening on port ${port}...`);
});
