const express = require("express");
const users = require("../controllers/user.controller.js");
const update = require("../controllers/userUpdate.controller.js");
const auth = require("../middleware/auth.js");
const router = express.Router();

router.get("/", (req, res) => {
  return res.sendStatus(200);
});

router.post("/signup", users.createUser);

router.post("/login", users.loginUser);

router.get("/logout", users.logoutUser);

router.post("/validate_password", [auth.withAuth], users.validatePassword);

// NOTE: putting un-secured routes after withAuth seem to run withAuth.
router.get("/:email", [auth.withAuth], update.getOneProfile);

router.put("/update/:email", [auth.withAuth], update.updateProfile);

router.put("/change_password/:email", [auth.withAuth], update.updatePassword);

module.exports = router;
