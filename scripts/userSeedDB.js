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

const userSeed = [
  {
      firstName: "Amanda",
      lastName: "Wiz",
      memberType: "Mentor",
      assessment_ID: { type: Schema.Types.ObjectId, ref: "Assessment" },
      date: new Date(Date.now())
  },
  {
      firstName: "Austin",
      lastName: "Paris",
      memberType: "Mentee",
      assessment_ID: { type: Schema.Types.ObjectId, ref: "Assessment" },
      date: new Date(Date.now())
  },
  {
      firstName: "Lorna",
      lastName: "SoCool",
      memberType: "Mentor",
      assessment_ID: { type: Schema.Types.ObjectId, ref: "Assessment" },
      date: new Date(Date.now())
  },
  {
      firstName: "Lisa",
      lastName: "Jett",
      memberType: "Mentee",
      assessment_ID: { type: Schema.Types.ObjectId, ref: "Assessment" },
      date: new Date(Date.now())
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " users inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });