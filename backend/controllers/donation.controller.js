const mongoose = require("mongoose");
const Donation = require("../models/donation.model");

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
  createDonation,
  getDonation,
  getOneDonation
};
