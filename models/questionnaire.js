const mongoose = require("mongoose"); //development DB in mongoose, (Robo 3t), should be titled "mavSquared".
const Schema = mongoose.Schema;

const questionnaireSchema = new Schema({
  //user_ID: { type: Schema.Types.ObjectId, ref: "User" },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  type: { type: String, required: true },
  gitHub: { type: String, required: true },
  password: { type: String, required: "A password of at least 6 characaters is required", 
    validate: [ //requires this to be at least 6 charcters
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },
  quote: { type: String, required: true },
  coded: { type: String, required: true },
  profession: { type: String, required: true },
  schooling: { type: String, required: false },
  goals: { type: String, required: false},
  impact: { type: String, required: false },
  reasons: { type: String, required: true },
  careerLevel: { type: String, required: false },
  languages: { type: Array, required: true },
  industryExperience: { type: Array, required: true },
  githubAvatar: {type: String, required: false},
  
  //personalityResults: { type: Array, required: true },  //modify as necessary >> after reveiwing the Traitify API
  date: { type: Date, default: Date.now }
});

const Questionnaire = mongoose.model("Questionnaire", questionnaireSchema);

module.exports = Questionnaire;

// bioquestions: { type: Array, required: true },

//TEMPLATE FOR MOCK DATA - TO INSERT into Mongoose/MongoDB (Robo T3).
// db.questionnaires.insert({  
//   firstName:"", 
//   lastName: "", 
//   gitHub: "",
//   quote: "", 
//   coded: "", 
//   profession: "",
//   schooling: "",
//   impact: ".",
//   reasons: "."})



