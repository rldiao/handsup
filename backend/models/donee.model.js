// Schema for our receivers collection

const mongoose = require("mongoose");

const doneeSchema = mongoose.Schema({
  name: String,
  bankAccountToken: String,
  dob: String,
  monthlyDonationLimit: Number,
  monthlyRenewalDate: String,
  goal: [String],
  location: String,
  profilePicture: String,
  gender: String,
  nationality: String
});

module.exports = mongoose.model("donees", doneeSchema);
