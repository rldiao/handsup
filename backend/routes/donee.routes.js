const express = require("express");
const doneeController = require("../controllers/donee.controller");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/signup", doneeController.createDonee);

router.post("/login", doneeController.loginDonee);

router.get("/logout", doneeController.logoutDonee);

router.get("/", [doneeController.getDonees]);

router.get("/:_id", doneeController.getOneDonee);

router.get("/:_id", [auth.withAuth, doneeController.getOneDonee]);

router.put("/updatePostID/:_id", [
  auth.withAuth,
  doneeController.updatePostIDs
]);

router.put("/update/:_id", [auth.withAuth, doneeController.updateOneDonee]);

module.exports = router;
