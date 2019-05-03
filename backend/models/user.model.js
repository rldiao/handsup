const mongoose = require("mongoose");
const crypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const uniqueValidator = require("mongoose-unique-validator");

const sessionTime = 60;

const userSchema = mongoose.Schema({
  name: String,
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
  profilePic: String,
  savedDoneesID: [String],
  donationsID: [String],
  location: String,
  bankAccountToken: String
});

// hash the password
userSchema.methods.setPassword = function(password) {
  // TODO: move this into a service
  this.password = crypt.hashSync(password, crypt.genSaltSync(8));
};

// checking if password is valid
userSchema.methods.validatePassword = function(password) {
  return crypt.compareSync(password, this.password);
};

userSchema.methods.generateToken = function() {
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

userSchema.methods.toAuthJSON = function() {
  return {
    _id: this.id,
    email: this.email,
    token: this.generateToken()
  };
};

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
