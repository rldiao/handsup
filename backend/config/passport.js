const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const Users = require("../models/user.model");
const Donee = require("../models/donee.model");

passport.use(
  new LocalStrategy(
    {
      usernameField: "user[email]",
      passwordField: "user[password]"
    },
    (email, password, done) => {
      Users.findOne({ email }, (err, user) => {
        if (!err && user && user.validatePassword(password)) {
          return done(null, user);
        }

        Donee.findOne({ email }, (err, user) => {
          if (!err && user && user.validatePassword(password)) {
            return done(null, user);
          }
          return done(null, false, {
            error: "invalid email or password"
          });
        }).catch(done);
      });
    }
  )
);
