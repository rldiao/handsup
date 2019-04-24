// Schema for our donations collection

const mongoose = require("mongoose");

const donationsSchema = mongoose.Schema({
  donor: {
    type: String,
    required: true
  },
  donee: {
    type: String,
    required: true
  },
  "transaction-date": {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("donations", donationsSchema);
