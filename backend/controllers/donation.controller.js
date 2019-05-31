const stripe = require("../constants/stripe");
// const configureStripe = require("stripe");
const mongoose = require("mongoose");
const Donation = require("../models/donation.model");

// const stripe = configureStripe(STRIPE_SECRET_KEY);

// const charge = (token, amt) => {
//   return stripe.charges.create({
//     amount: amt * 100,
//     currency: "AUD",
//     source: token,
//     description: "Statement Description"
//   });
// };

const createDonation = function(req, res) {
  const newDonation = new Donation(req.body);
  // let data = await charge(req.body.token.id, req.body.amount);

  newDonation.save((err, newDonation) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(newDonation);
      console.log(data);
    }
  });
};

const getDonation = function(req, res) {
  Donation.find((err, donation) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(donation);
    }
  });
};

const getOneDonation = function(req, res) {
  Donation.findOne({ _id: req.params._id }, (err, donation) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(donation);
    }
  });
};

module.exports = {
  createDonation,
  getDonation,
  getOneDonation
};
