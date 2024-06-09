const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("You need to Login");

  jwt.verify(token, process.env.SECRET_KEY), (err, user) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json('Token expired. Please login again.');
      }
      return res.status(403).json('Token is not valid');
    }
    req.user = user;
    next();
  }
};