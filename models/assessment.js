const mongoose = require("mongoose"); //development DB in mongoose, (Robo 3t), should be titled "mavSquared".
const Schema = mongoose.Schema;

const assessmentSchema = new Schema({
  user_ID: { type: Schema.Types.ObjectId, ref: "User" },
  threeTopics: { type: Array, required: true }, 
  personalityResults: { type: Array, required: true },  //modify as necessary >> after reveiwing the Traitify API
  careerResults: {type: String, required: true }  //modify as necessary >> after reveiwing the Traitify API
  date: { type: Date, default: Date.now }
});

const Assessment = mongoose.model("Assessment", assessmentSchema);

module.exports = Assessment;