const jwt = require("jsonwebtoken");

const withAuth = function(req, res, next) {
  // Cookie is still here prabably due to passport
  const token = req.cookies.token;

  if (process.env.NODE_ENV !== "production") {
    return next();
  }
  if (!token) {
    res.status(403).send("FORBIDDEN");
  } else {
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        console.log(err);
        return res.status(401).send("UNAUTHORIZED");
      } else {
        req.email = decoded.email;
        return next();
      }
    });
  }
};

module.exports = { withAuth };
