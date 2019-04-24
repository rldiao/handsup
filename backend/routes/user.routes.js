module.exports = app => {
  const users = require("../controllers/user.controller.js");
  const auth = require("../middleware/auth.js");

  app.post("/signup", users.createUser);

  app.post("/login", users.loginUser);

  app.get("/logout", users.logoutUser);

  // TODO: Authenticate access
  //   app.get("/", users.getProfile);

  //   app.get("/:email", users.getOneProfile);

  //   app.post("/new", users.createProfile);

  //   app.put("/update/:email", users.updateProfile);

  //   app.delete("/delete/:email", users.deleteProfile);
};
