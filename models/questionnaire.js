const mongoose = require("mongoose"); //development DB in mongoose, (Robo 3t), should be titled "mavSquared".
const Schema = mongoose.Schema;

const questionnaireSchema = new Schema({
  user_ID: { type: Schema.Types.ObjectId, ref: "User" },
  threeTopics: { type: Array, required: true },
  careerLevel: { type: String, required: true },
  careerResults: {type: Array, required: true },  //modify as necessary >> after creating the career questionnaire
  personalityResults: { type: Array, required: true },  //modify as necessary >> after reveiwing the Traitify API
  date: { type: Date, default: Date.now }
});

const Questionnaire = mongoose.model("Questionnaire", questionnaireSchema);

module.exports = Questionnaire;