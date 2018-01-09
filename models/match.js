

const mongoose = require("mongoose"); //development DB in mongoose, (Robo 3t), should be titled "mavSquared".
const Schema = mongoose.Schema;

const matchSchema = new Schema({
  	user_ID: { type: Schema.Types.ObjectId, ref: "User" },
    matchList: { type: Array, required: true, limit: 15  }// this list should display on a “Match” Page.
});

const Match = mongoose.model("Match", matchSchema);

module.exports = Match;