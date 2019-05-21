const jwt = require("jsonwebtoken");
const envParsed = require("dotenv").config().parsed;
const env = envParsed.NODE_ENV;
const secret = envParsed.TOKEN_STR;

const withAuth = function(req, res, next) {
  // Cookie is still here prabably due to passport
  const token = req.cookies.token;

  if (env === "development") {
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
