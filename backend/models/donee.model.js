// Schema for our receivers collection

const mongoose = require("mongoose");

const doneeSchema = mongoose.Schema({
  name: String,
  bankAccountToken: String,
  dob: String,
  gender: String,
  nationality: String,
  bio: String,
  monthlyDonationLimit: Number,
  monthlyRenewalDate: String,
  funded: Number,
  goal: [String],
  location: String,
  profilePicture: String
});

module.exports = mongoose.model("donees", doneeSchema);
