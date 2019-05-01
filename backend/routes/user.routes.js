module.exports = app => {
  const users = require("../controllers/user.controller.js");
  const update = require("../controllers/userUpdate.controller.js");
  const auth = require("../middleware/auth.js");

  app.post("/signup", users.createUser);

  app.post("/login", users.loginUser);

  app.get("/logout", users.logoutUser);

  // TODO: Authenticate access
  // app.get("/", users.getProfile);

  app.get("/:email", update.getOneProfile);

  app.put("/update/:email", [auth.withAuth, update.updateProfile]);

  //   app.delete("/delete/:email", users.deleteProfile);
};
