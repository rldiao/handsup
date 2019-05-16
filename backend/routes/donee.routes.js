const express = require("express");
const doneeController = require("../controllers/donee.controller");
const auth = require("../middleware/auth");
const router = express.Router();

const _auth = (req, res, next) => {
  if (process.env.NODE_ENV === "development") {
    next();
  } else {
    return auth.withAuth;
  }
};

router.post("/signup", doneeController.createDonee);

router.post("/login", doneeController.loginDonee);

router.get("/logout", doneeController.logoutDonee);

router.get("/", _auth, doneeController.getDonees);

router.get("/:_id", doneeController.getOneDonee);

router.get("/:_id", [_auth], doneeController.getOneDonee);

router.put("/new_post/:_id", [_auth], doneeController.addPostID);

router.put("/remove_post/:_id", [_auth], doneeController.removePostID);

router.put("/update/:_id", [_auth], doneeController.updateOneDonee);

module.exports = router;
