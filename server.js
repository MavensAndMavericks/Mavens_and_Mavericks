//WEB DEPENDENCIES:
//===============================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001; //this PORT MUST MATCH the proxy port set in the package.json inside "client/utils" >> (on the REACT side)

// const traitify = require('traitify');
const Chart = require('chart.js');
// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;
// Use the GoogleStrategy within Passport (As shown - in the configuration area - below.
//   Strategies in passport require a `verify` function, which accept.
//    ... credentials (in this case, a token, tokenSecret, and Google profile) -> which have been saved in keys.js,
//    ... and invoke a callback with a user object.


//LOCAL DEPENDENCY /IMPORTS
//===============================================
// const keys = require("./keys.js"); //IN order to import the "googleAuth" variable for the google auth keys (needed) below. 



//SERVER SET-UP (Routing MIDDLEWARE Definition)
//=========================================================================================
// Configure Body-Parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets
app.use('/', express.static(path.join(__dirname + '/client/public'))); //SHOULD THIS READ: "client/BUILD" or "client/PUBLIC"?!?! >> IS "build" a REACT term?

// Add routes, both API routes and view(html) routes
app.use(routes);


// Configure Passport.js // !! FOR SOME REASON the page does NOT RENDER when this is not uncommented !! >> Talk to TA.
// passport.use(new GoogleStrategy( keys,  //this references the googleAuth keys in keys.js
//   function(token, tokenSecret, profile, done) {
//       User.findOrCreate({ googleId: profile.id }, function (err, user) {
//         return done(err, user);
//       });
//   }
// ));


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
////var MONGODB_URI = mongodb://heroku_p6dj1jmx:vdojlgvrsvdl6becgahtq7skel@ds237947.mlab.com:37947/heroku_p6dj1jmx
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