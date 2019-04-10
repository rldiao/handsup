const mongoose = require("mongoose");
const donorsSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dob: String,
  "profile-pic": String
});
mongoose.model("donors", donorsSchema);
