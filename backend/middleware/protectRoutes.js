const jwt = require("jsonwebtoken");
const User = require("../models/User");

const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        req.user = null;
        res.status(401);
        throw new Error("Not Authorized");
        next();
      } else {
        req.user = await User.findById(decodedToken.id);
        //console.log(token,req.user,decodedToken.id)
        next();
      }
    });
  }

  if (!token) {
    res.status(401);
    throw new Error("Not Authorized, No Token");
  }
};

module.exports = { checkUser };
