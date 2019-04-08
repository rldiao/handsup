const mongoose = require("mongoose");
const Donor = mongoose.model("donors");

const updateProfile = function(req, res) {
    const donor = new Donor({
        "name": req.body.name,
        "password": req.body.password,
        "email": req.body.email,
        "dob": req.body.dob,
        "profile-pic": req.body['profile-pic']
    })
    Donor.update({})
};

