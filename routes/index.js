const path = require("path");
const express = require("express");
const app = express();
const router = require("express").Router();
const apiRoutes = require("./api"); //this requires in the "index.js" from "routes/api/index.js"

// const questionnairesController = require("../controllers/questionnairesController");
//if at profile, specifically show profile:
// app.get("/welcomeMaven/:id?", function(req, res) {
//   questionnairesController.findById
// });

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app (the views/html route(s)):
//otherwise root:
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html")); //does this need to read "/client/PUBLIC/index.html" instead of "client/BUILD/index.html"??
});

 
 // getProfiles: function(questionnaireData) {
 // return axios.get("/welcomeMaven", function(){
 //   var sbWidgetToggle = document.getElementById("sb_widget");
 //   sbWidgetToggle.show();
 // })

module.exports = router, app;