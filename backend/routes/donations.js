const express = require("express");
const donationController = require("../controllers/donationController");
const router = express.Router();

router.get("/", donationController.getDonation);

router.get("/id", donationController.getOneDonation);

router.post("/new", donationController.createDonation);

// We assume the donations info can't be deleted or altered

module.exports = router;