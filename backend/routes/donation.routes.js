const express = require("express");
const donationController = require("../controllers/donation.controller");
const router = express.Router();
const auth = require("../middleware/auth");

router.get("/", [auth.withAuth, donationController.getDonation]);

router.get("/:_id", [auth.withAuth, donationController.getOneDonation]);

router.post("/newstripe", [
  auth.withAuth,
  donationController.createStripeDonation
]);

router.post("/new", [auth.withAuth, donationController.createDonation]);

// We assume the donations info can't be deleted or altered(updated)

module.exports = router;
