/* This module will hold our connection to 
   our mongo server through the Mongoose API.
   We will access the connection in our express server. */
const mongoose = require("mongoose");

/* Connnect to our database */
const mongoURI = `mongodb://${ process.env.DB_USER }:${ process.env.DB_KEY }@${ process.env.DB_URL }`;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

module.exports = { mongoose }; // Export the active connection.
