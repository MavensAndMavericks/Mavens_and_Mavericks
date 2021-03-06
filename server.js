//WEB DEPENDENCIES:
//===============================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
// const session = require('express-session');
const app = express();
const axios = require("axios");
const PORT = process.env.PORT || 3001; //this PORT MUST MATCH the proxy port set in the package.json inside "client/utils" >> (on the REACT side)
// const traitify = require('traitify');
const Chart = require('chart.js');

//SERVER SET-UP (Routing MIDDLEWARE Definition)
//=========================================================================================
// Configure Body-Parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.set('trust proxy', 1) // trust first proxy
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true
// }))

// Serve up static assets
app.use('/', express.static(path.join(__dirname + '/client/build'))); //SHOULD THIS READ: "client/BUILD" or "client/PUBLIC"?!?! >> IS "build" a REACT term?



// Add routes, both API routes and view(html) routes
app.use(routes);

// Configure Chart.js
//const myChart = new Chart(ctx, {...});


// // Configure Traitify
// traitify.setHost("lvh.me");
// traitify.setVersion("v1");
// traitify.setSecretKey("fakeKey");



//PORT and Database Definition AND Set-up
//=========================================
mongoose.Promise = global.Promise; // Set up promises with mongoose

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mavSquared", // !! DB in mongoose, (Robo 3t), should be "mavSquared" !!

  {
    useMongoClient: true
  }
);



// Start the Server // Initialize Server Listiner with PORT Connection..
//==========================================================================
app.listen(PORT, function() {
  console.log(`Hey there!! Your API Server now listening on PORT ${PORT}. Have fun. :)`);
}); // Starting the API server
