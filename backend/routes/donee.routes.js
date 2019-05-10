const express = require("express");
const doneeController = require("../controllers/donee.controller");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/signup", doneeController.createDonee);

router.post("/login", doneeController.loginDonee);

router.get("/logout", doneeController.logoutDonee);

router.get("/", [auth.withAuth, doneeController.getDonees]);

router.put("/updatePostID/:_id", doneeController.updatePostIDs);

router.put("/update/:_id", doneeController.updateOneDonee);

module.exports = router;
