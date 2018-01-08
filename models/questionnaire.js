const mongoose = require("mongoose"); //development DB in mongoose, (Robo 3t), should be titled "mavSquared".
const Schema = mongoose.Schema;

const questionnaireSchema = new Schema({
  user_ID: { type: Schema.Types.ObjectId, ref: "User" },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gitHub: { type: String, required: true },
  bioquestions: { type: Array, required: true },

  careerLevel: { type: String, required: true },
  languages: { type: Array, required: true },
  industryExperience: { type: Array, required: true },

  personalityResults: { type: Array, required: true },  //modify as necessary >> after reveiwing the Traitify API
  date: { type: Date, default: Date.now }
});

const Questionnaire = mongoose.model("Questionnaire", questionnaireSchema);

module.exports = Questionnaire;