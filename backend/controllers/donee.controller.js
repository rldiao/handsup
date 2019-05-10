const mongoose = require("mongoose");
const Donee = require("../models/donee.model");

/* --Added donee profile creating controller functions-- */
const createDonee = (req, res) => {
  const {
    body: { donee }
  } = req;
  if (!donee.email) {
    return res.status(422).json({
      errors: {
        email: "is required"
      }
    });
  }

  if (!donee.password) {
    return res.status(422).json({
      errors: {
        password: "is required"
      }
    });
  }

  const newDonee = new Donee(donee);

  // Hash password
  newDonee.setPassword(donee.password);

  // .save() stores the model into db
  newDonee.save((err, donee) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    res.json({ donee: donee.toAuthJSON() });
  });
};

const loginDonee = (req, res, next) => {
  const {
    body: { donee }
  } = req;

  if (!donee.email) {
    return res.status(422).json({
      errors: {
        email: "is required"
      }
    });
  }

  if (!donee.password) {
    return res.status(422).json({
      errors: {
        password: "is required"
      }
    });
  }

  return passport.authenticate(
    "local",
    { session: false },
    (err, passportDonee, info) => {
      if (err) {
        return next(err);
      }
      if (passportDonee) {
        const donee = passportDonee;
        donee.token = passportDonee.generateToken();
        return (
          res
            .status(200)
            // .cookie('token', donee.token, {httpOnly: true, secure: true});
            .json({ donee: donee.toAuthJSON() })
        );
      }
      return res.sendStatus(401);
    }
  )(req, res, next);
};

const logoutDonee = (req, res) => {
  req.logout();
  req.session.destroy(err => {
    if (!err) {
      return res
        .status(200)
        .clearCookie("connect.sid", { path: "/" })
        .json({ status: "Success" });
    } else {
      // handle error case...
      return res.sendStatus(401);
    }
  });
};
/* ---- */

const getDonees = function(req, res) {
  Donee.find((err, donee) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(donee);
    }
  });
};

const getOneDonee = function(req, res) {
  Donee.findOne({ _id: req.params._id }, (err, donee) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(donee);
    }
  });
};

const addOneDonee = function(req, res) {
  const newDonee = new Donee(req.body);

  newDonee.save((err, newDonee) => {
    if (err) {
      res.sendStatus(404);
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
        res.sendStatus(404);
      } else {
        res.send(donee);
      }
    }
  );
};

const deleteOneDonee = function(req, res) {
  Donee.findOneAndDelete({ _id: req.params._id }, (err, donee) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(donee);
    }
  });
};

module.exports = {
  createDonee,
  loginDonee,
  logoutDonee,
  getDonees,
  getOneDonee,
  addOneDonee,
  updateOneDonee,
  deleteOneDonee
};
