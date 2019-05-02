const jwt = require("jsonwebtoken");
const secret = process.env.TOKEN_STR;

const withAuth = function(req, res, next) {
  // TODO: Axios req.headers not getting token.
  // Cookie is still here prabably due to passport
  const token = req.headers["Authorization"] || req.cookies.token;
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
