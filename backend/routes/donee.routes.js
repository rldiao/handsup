const express = require("express");
const doneeController = require("../controllers/donee.controller");

const router = express.Router();
router.get("/", doneeController.getDonees);

router.get("/:_id", doneeController.getOneDonee);

router.put("/update/:_id", doneeController.updateOneDonee);

router.post("/new", doneeController.addOneDonee);

router.delete("/delete/:_id", doneeController.deleteOneDonee);

module.exports = router;
