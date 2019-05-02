const express = require("express");
const doneeController = require("../controllers/donee.controller");
const auth = require("../middleware/auth");
const router = express.Router();

router.get("/", [auth.withAuth, doneeController.getDonees]);

router.get("/:_id", doneeController.getOneDonee);

router.put("/update/:_id", doneeController.updateOneDonee);

router.post("/new", doneeController.addOneDonee);

router.delete("/delete/:_id", doneeController.deleteOneDonee);

module.exports = router;
