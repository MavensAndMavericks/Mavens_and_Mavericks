const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mavSquared",
  {
    useMongoClient: true
  }
);

const questionnaireSeed = [
  {
      user_ID: { type: Schema.Types.ObjectId, ref: "User" },
      threeTopics: ["JavaScript","Node.js","React"], 
      personalityResults: "Mentor",  //modify as necessary >> after reveiwing the Traitify API
      careerLevel: "Professional",
      careerResults: [3,4,2,1,1,3,4,2,3,2] //modify as necessary >> after creating the career questionnaire
      date: new Date(Date.now())
  },
  {
      user_ID: { type: Schema.Types.ObjectId, ref: "User" },
      threeTopics: ["Node.js","jQuery","MongoDB"], 
      personalityResults: "Mentee",  //modify as necessary >> after reveiwing the Traitify API
      careerLevel: "College",
      careerResults: [2,1,3,4,4,3,2,3,3,3] //modify as necessary >> after creating the career questionnaire
      date: new Date(Date.now())
  },
  {
      user_ID: { type: Schema.Types.ObjectId, ref: "User" },
      threeTopics: ["React","Node.js","Express.js"], 
      personalityResults: "Mentor",  //modify as necessary >> after reveiwing the Traitify API
      careerLevel: "Professional",
      careerResults: [3,4,4,4,2,1,4,3,2,2] //modify as necessary >> after creating the career questionnaire
      date: new Date(Date.now())
  },
  {
      user_ID: { type: Schema.Types.ObjectId, ref: "User" },
      threeTopics: ["JavaScript","Node","React"], 
      personalityResults: "Mentee",  //modify as necessary >> after reveiwing the Traitify API
      careerLevel: "College",
      careerResults: [3,2,4,3,2,1,1,3,3,3] //modify as necessary >> after creating the career questionnaire
      date: new Date(Date.now())
  }
];

db.Questionnaire
  .remove({})
  .then(() => db.User.collection.insertMany(questionnaireSeed))
  .then(data => {
    console.log(data.insertedIds.length + " users inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });