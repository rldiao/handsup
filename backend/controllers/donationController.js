const mongoose = require("mongoose");
const Donation = mongoose.model("donations");

const createDonation = function(req, res) {
    const newDonation = new Donation(req.body);

    newDonation.save((err, newDonation) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.send(newDonation);
        }
    });
};

const getDonation = function(req, res) {
    Donation.find((err, donation) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.send(donation);
        }
    });
};

const getOneDonation = function(req, res) {
    Donation.findOne(
        {id: req.params.id},
        (err, donation) => {
            if (err) {
                res.sendStatus(500);
            }
            else {
                res.send(donation);
            }
        }
    );
};

module.exports = {
    createDonation,
    getDonation,
    getOneDonation
};