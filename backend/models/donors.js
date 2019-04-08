const mongoose = require("mongoose");
const donorsSchema = mongoose.Schema ({
    "name": {type: String, required: true},
    "password": {type: String, required: true},
    "email": {type: String, required: true, unique: true},
    "dob": Date,
    "profile-pic": String
    }

);
mongoose.model("donors", donorsSchema);