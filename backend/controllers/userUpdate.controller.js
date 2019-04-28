const mongoose = require("mongoose");
const Donor = require("../models/user.model");

const getProfile = function(req, res) {
  Donor.find((err, donor) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(donor);
    }
  });
};

const getOneProfile = function(req, res) {
  Donor.findOne({ username: req.params.username }, (err, donor) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(donor);
    }
  });
};

const updateProfile = function(req, res) {
  Donor.findOneAndUpdate(
    { username: req.params.username },
    req.body,
    { new: true },
    (err, donor) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.send(donor);
      }
    }
  );
};

const deleteProfile = function(req, res) {
  Donor.findOneAndDelete({ username: req.params.username }, (err, donor) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(donor);
    }
  });
};

module.exports = {
  getProfile,
  getOneProfile,
  updateProfile,
  deleteProfile
};
