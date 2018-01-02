const mongoose = require("mongoose");
const Schema = mongoose.Schema; //development DB in mongoose, (Robo 3t), should be titled "mavSquared".

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  memberType: { type: String, required: true },
  assessment_ID: { type: Schema.Types.ObjectId, ref: "Assessment" },
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;