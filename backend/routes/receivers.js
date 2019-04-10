const express = require("express");
const receiverController = require("../controllers/receiverController");

const router = express.Router();
router.get("/", receiverController.getReceivers);

router.get("/:id", receiverController.getOneReceiver);

router.post("/update/:id", receiverController.updateOneReceiver);

router.put("/new", receiverController.addOneReceiver);

router.delete("/delete/:id", receiverController.deleteOneReceiver);

module.exports = router;
