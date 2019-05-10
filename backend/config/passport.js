const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const Users = require("../models/user.model");

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser(async (id, done) => {
//   try {
//     const user= await Users.findById(id);
//     done(null, user);
//   } catch(error) {
//     done(error, null);
//   }
// })

passport.use(
  new LocalStrategy(
    {
      usernameField: "user[email]",
      passwordField: "user[password]"
    },
    (email, password, done) => {
      Users.findOne({ email })
        .then(user => {
          if (!user || !user.validatePassword(password)) {
            return done(null, false, {
              errors: { "email or password": "is invalid" }
            });
          }

          return done(null, user);
        })
        .catch(done);
    }
  )
);
