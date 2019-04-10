const express = require("express");
const controller = require("../controllers/donorController.js");

const router = express.Router();

router.get("/", controller.getProfile);

router.get("/:username", controller.getOneProfile);

router.post("/new", controller.createProfile);

router.put("/update/:username", controller.updateProfile);

router.delete("/delete/:username", controller.deleteProfile);

module.exports = router;
