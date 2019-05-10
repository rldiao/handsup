// Schema for our receivers collection

const mongoose = require("mongoose");
const crypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const uniqueValidator = require("mongoose-unique-validator");

const sessionTime = 60;

const doneeSchema = mongoose.Schema({
  email: {
    type: String,
    trim: true,
    index: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  socialSecurityNumber: {
    type: String,
    require: true,
    unique: true
  },
  phoneNumber: String,
  dob: String,
  location: String,
  nationality: String,
  gender: String,
  profilePicture: String,
  bio: String,
  goal: [String],
  monthlyDonationLimit: Number,
  funded: Number,
  postIDs: [String]

  // bankAccountToken: String,
  // monthlyRenewalDate: String,
});

/* ---------- Same as user.model.js ----------
 */
// hash the password
doneeSchema.methods.setPassword = function(password) {
  // TODO: move this into a service
  this.password = crypt.hashSync(password, crypt.genSaltSync(8));
};

// checking if password is valid
doneeSchema.methods.validatePassword = function(password) {
  return crypt.compareSync(password, this.password);
};

doneeSchema.methods.generateToken = function() {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + sessionTime);

  return jwt.sign(
    {
      email: this.email,
      id: this._id,
      exp: parseInt(expirationDate.getTime() / 1000, 10)
    },
    process.env.TOKEN_STR
  );
};

doneeSchema.methods.toAuthJSON = function() {
  return {
    _id: this.id,
    email: this.email,
    token: this.generateToken()
  };
};

doneeSchema.plugin(uniqueValidator);

/* ---------- */

module.exports = mongoose.model("donees", doneeSchema);
