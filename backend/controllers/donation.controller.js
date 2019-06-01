const stripe = require("../constants/stripe");
const mongoose = require("mongoose");
const Donation = require("../models/donation.model");

const charge = (token, amt) => {
  return stripe.charges.create({
    amount: amt * 100,
    currency: "AUD",
    source: token,
    description: "Statement Description"
  });
};

const createStripeDonation = async function(req, res) {
  try {
    let data = await charge(req.body.token.id, req.body.amount);
    console.log(data);
    res.send("Charged!");
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

const createDonation = function(req, res) {
  const newDonation = new Donation(req.body);

  newDonation.save((err, newDonation) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(newDonation);
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
  createStripeDonation,
  createDonation,
  getDonation,
  getOneDonation
};
