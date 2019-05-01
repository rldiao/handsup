const Donor = require("../models/user.model");

const getOneProfile = function(req, res) {
  Donor.findOne({ email: req.params.email }, (err, donor) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(donor);
    }
  });
};

const updateProfile = function(req, res) {
  Donor.findOneAndUpdate(
    { email: req.params.email },
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
  Donor.findOneAndDelete({ email: req.params.email }, (err, donor) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(donor);
    }
  });
};

const updatePassword = function(req, res) {
  Donor.findOneAndUpdate(
    { email: req.params.email },
    req.body.password,
    null,
    (err, donor) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.send(200);
      }
    }
  );
};

module.exports = {
  getOneProfile,
  updateProfile,
  deleteProfile,
  updatePassword
};
