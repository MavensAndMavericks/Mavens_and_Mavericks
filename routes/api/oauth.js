// const express = require("express");
// const app = express();
// // const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;

// // GET /auth/google (BELOW)
// //   ... Use passport.authenticate() as route middleware to authenticate the
// //   ...  request.  The first step in Google authentication will involve redirecting
// //   ...  the user to google.com.  After authorization, Google will redirect the user
// //   ...  back to this application at /auth/google/callback
// app.get('/auth/google',
//   passport.authenticate('google', { scope: 'https://www.google.com/m8/feeds' }));

// // GET /auth/google/callback (BELOW)
// //   Use passport.authenticate() as route middleware to authenticate the
// //   ...  request.  If authentication fails, the user will be redirected back to the
// //   ...  login page.  Otherwise, the primary route function function will be called,
// //   ...  which, in this example, will redirect the user to the home page.
// app.get('/auth/google/callback', 
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/');
//   });

// module.exports = app;
