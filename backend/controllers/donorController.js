const mongoose = require("mongoose");
const Donor = mongoose.model("donors");

const getProfile = function(req, res) {
  Donor.find((err, donor) => {
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

module.exports = {
  getProfile,
  updateProfile
};
