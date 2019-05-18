const passport = require("passport");
const Users = require("../models/user.model");
const userTypeConstants = require("../constants/userTypeConstants");

exports.createUser = (req, res) => {
  const {
    body: { user }
  } = req;
  if (!user.email) {
    return res.status(422).json({
      errors: {
        email: "is required"
      }
    });
  }

  if (!user.password) {
    return res.status(422).json({
      errors: {
        password: "is required"
      }
    });
  }

  const newUser = new Users(user);
  newUser.userType = userTypeConstants.donor;

  // Hash password
  newUser.setPassword(user.password);

  // .save() stores the model into db
  newUser.save((err, user) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    res.json({ user: user.toAuthJSON() });
  });
};

exports.loginUser = (req, res, next) => {
  const {
    body: { user }
  } = req;

  if (!user.email) {
    return res.status(422).json({
      errors: {
        email: "is required"
      }
    });
  }

  if (!user.password) {
    return res.status(422).json({
      errors: {
        password: "is required"
      }
    });
  }

  /* NOTE: cannot support multi-type user accounts because the findOne is in
     local passport strategy, and the userType cannot be passed in through the
     passport authenticate function.
  */
  return passport.authenticate(
    "local",
    { session: false },
    (err, passportUser, info) => {
      if (err) {
        return next(err);
      }
      if (passportUser) {
        const user = passportUser;
        user.token = passportUser.generateToken();
        return res
          .status(200)
          .cookie("token", user.token, { httpOnly: true })
          .json({ user: user.toAuthJSON(), userType: user.userType });
      }
      return res.sendStatus(401);
    }
  )(req, res, next);
};

exports.logoutUser = (req, res) => {
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

exports.validatePassword = (req, res) => {
  const {
    body: { user }
  } = req;

  const email = user.email;
  const password = user.password;

  Users.findOne({ email }).then(user => {
    if (user.validatePassword(password)) {
      return res.sendStatus(200);
    } else {
      return res.sendStatus(401);
    }
  });
};
