const express = require("express");
const doneeController = require("../controllers/donee.controller");
const auth = require("../middleware/auth");
const router = express.Router();
const env = require("dotenv").config().parsed.NODE_ENV;

router.post("/signup", doneeController.createDonee);

router.post("/login", doneeController.loginDonee);

router.get("/logout", doneeController.logoutDonee);

<<<<<<< HEAD
router.get("/", [auth.withAuth, doneeController.getDonees]);

router.get("/:_id", [auth.withAuth, doneeController.getOneDonee]);

router.put("/new_post/:_id", [auth.withAuth, doneeController.addPostID]);

router.put("/remove_post/:_id", [auth.withAuth, doneeController.removePostID]);

router.put("/update/:_id", [auth.withAuth, doneeController.updateOneDonee]);
=======
router.get("/", [auth.withAuth], doneeController.getDonees);

router.get("/:_id", doneeController.getOneDonee);

router.get("/:_id", [auth.withAuth], doneeController.getOneDonee);

router.put("/new_post/:_id", [auth.withAuth], doneeController.addPostID);

router.put("/remove_post/:_id", [auth.withAuth], doneeController.removePostID);

router.put("/update/:_id", [auth.withAuth], doneeController.updateOneDonee);
>>>>>>> origin

module.exports = router;
