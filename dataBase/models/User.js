const mongoose = require("mongoose");

const { Schema } = mongoose;
const userSchema = new Schema({
  googleId: String,
  fullName: String,
  firstName: String,
  lastName: String,
  emails: [String],
  credits: {
    type: Number,
    default: 0
  }
});

mongoose.model("users", userSchema);
