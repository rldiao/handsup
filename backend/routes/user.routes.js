const express = require("express");
const users = require("../controllers/user.controller.js");
const update = require("../controllers/userUpdate.controller.js");
const auth = require("../middleware/auth.js");
const router = express.Router();

router.post("/signup", users.createUser);

router.post("/login", users.loginUser);

router.get("/logout", users.logoutUser);

// router.get("/", (req, res) => {
//   res.send(req.headers);
// });

router.get("/:email", update.getOneProfile);

router.put("/update/:email", update.updateProfile);

router.put("/change_password/:email", update.updatePassword);

module.exports = router;
