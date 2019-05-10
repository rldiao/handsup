const passport = require("passport");
const Users = require("../models/user.model");

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
        return (
          res
            .status(200)
            // .cookie('token', user.token, {httpOnly: true, secure: true});
            .json({ user: user.toAuthJSON() })
        );
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
