const jwt = require("jsonwebtoken");
const secret = process.env.TOKEN_STR;

const withAuth = function(req, res, next) {
  const token = req.headers["Authorization"] || req.cookies.token;
  // req.body.token ||
  // req.query.token ||
  // req.headers["Authorization"] ||
  // req.cookies.token;
  // console.log(token);
  if (!token) {
    res.status(401).send("Unauthorized: No token provided");
  } else {
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        console.log(err);
        res.status(401).send("Unauthorized: Invalid token");
      } else {
        req.email = decoded.email;
        next();
      }
    });
  }
};

module.exports = { withAuth };
