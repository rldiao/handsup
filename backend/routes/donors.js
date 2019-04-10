const express = require("express");
const controller = require("../controllers/donorController.js");

const router = express.Router();

router.get("/", controller.getProfile);

router.put("/update/:username", controller.updateProfile);

module.exports = router;
