// https://stackoverflow.com/questions/43092071/how-should-i-store-salts-and-passwords-in-mongodb

const mongoose = require('mongoose');
var bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
}, {
    timestamps: true
});

// hash the password
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
