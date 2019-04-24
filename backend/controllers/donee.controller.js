const mongoose = require("mongoose");
const Donee = require("../models/donee.model");
const getDonees = function(req, res) {
  Donee.find((err, donee) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(donee);
    }
  });
};

const getOneDonee = function(req, res) {
  Donee.findOne({ _id: req.params._id }, (err, donee) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(donee);
    }
  });
};

const addOneDonee = function(req, res) {
  const newDonee = new Donee(req.body);

  newDonee.save((err, newDonee) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(newDonee);
    }
  });
};

const updateOneDonee = function(req, res) {
  Donee.findOneAndUpdate(
    { _id: req.params._id },
    req.body,
    { new: true },
    (err, donee) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.send(donee);
      }
    }
  );
};

const deleteOneDonee = function(req, res) {
  Donee.findOneAndDelete({ _id: req.params._id }, (err, donee) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(donee);
    }
  });
};

module.exports = {
  getDonees,
  getOneDonee,
  addOneDonee,
  updateOneDonee,
  deleteOneDonee
};
