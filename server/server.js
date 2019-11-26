
'use strict';
const log = console.log

const express = require('express')
// starting the express server
const app = express();

// mongoose and mongo connection
const { mongoose } = require('./db/mongoose')

// import the mongoose models
const { FoodTruck } = require('./models/Foodtruck')
const { User } = require('./models/User')
const { Order } = require('./models/Order')
const { Admin } = require('./models/Admin')

// to validate object IDs
const { ObjectID } = require('mongodb')

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require('body-parser') 
app.use(bodyParser.json())

// express-session for managing user sessions
const session = require('express-session')
app.use(bodyParser.urlencoded({ extended: true }));

/*** Session handling **************************************/
// Create a session cookie
app.use(session({
    secret: 'oursecret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60000,
        httpOnly: true
    }
}));

// Our own express middleware to check for 
// an active user on the session cookie (indicating a logged in user.)
// const sessionChecker = (req, res, next) => {
//     if (req.session.user) {
//         res.redirect('/dashboard'); // redirect to dashboard if logged in.
//     } else {
//         next(); // next() moves on to the route.
//     }    
// };


/*
    APIs for admin to get all users and foodtrucks
*/

// TODO: Check session for Admin
app.get('/users', (req, res) => {

    User.find().then((result) => {
		res.send(result)
	}, (error) => {
		res.status(500).send(error)
    })
})
// TODO: Check session for Admin
app.get('/fts', (req, res) => {

    FoodTruck.find().then((result) => {
		res.send(result)
	}, (error) => {
		res.status(500).send(error)
	})
})


