const express = require("express");
const donationController = require("../controllers/donation.controller");
const router = express.Router();

router.get("/", donationController.getDonation);

router.get("/:_id", donationController.getOneDonation);

router.post("/new", donationController.createDonation);

// We assume the donations info can't be deleted or altered(updated)

module.exports = router;
