const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 7700;

require("./keys.js"); //IN order to import the "googleAuth" variable for the google auth keys (needed) below.

const traitify = require('traitify');
const Chart = require('chart.js');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;
// Use the GoogleStrategy within Passport (As shown - in the configuration - below.
//   Strategies in passport require a `verify` function, which accept.
//    ... credentials (in this case, a token, tokenSecret, and Google profile),
//    ... and invoke a callback with a user object.


// Configure Body-Parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);


// Configure Traitify
traitify.setHost("lvh.me");
traitify.setVersion("v1");
traitify.setSecretKey("fakeKey");


// Configure Passport.js
passport.use(new GoogleStrategy( googleAuth,
  function(token, tokenSecret, profile, done) {
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return done(err, user);
      });
  }
));


// Configure Chart.js
//const myChart = new Chart(ctx, {...});

// Set up promises with mongoose
mongoose.Promise = global.Promise;

// Connect to the Mongo DB
////var MONGODB_URI = mongodb://heroku_p6dj1jmx:vdojlgvrsvdl6becgahtq7skel@ds237947.mlab.com:37947/heroku_p6dj1jmx
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mav2app", // !! DB in mongoose, (Robo 3t), should be "mav2users" !!

  {
    useMongoClient: true
  }
);


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});