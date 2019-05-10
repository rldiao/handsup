const Donor = require("../models/user.model");
const crypt = require("bcrypt");
const userTypeConstants = require("../constants/userTypeConstants");

const getOneProfile = function(req, res) {
  Donor.findOne({ email: req.params.email }, (err, donor) => {
    if (err) {
      res.sendStatus(404);
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
        res.sendStatus(404);
      } else {
        res.sendStatus(200);
      }
    }
  );
};

const deleteProfile = function(req, res) {
  Donor.findOneAndDelete({ email: req.params.email }, (err, donor) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(donor);
    }
  });
};

const updatePassword = function(req, res) {
  // TODO: try find better design using donor.setpassword
  let newPassword = crypt.hashSync(req.body.password, crypt.genSaltSync(8));
  Donor.findOneAndUpdate(
    { email: req.params.email },
    { password: newPassword },
    { new: true },
    (err, donor) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.sendStatus(200);
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
