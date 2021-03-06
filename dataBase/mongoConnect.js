const mongoose = require("mongoose");
const keys = require("../config/keys");

require("./models/User");

mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch(err => console.log("Error cannot connect to mongoDB: " + err));
