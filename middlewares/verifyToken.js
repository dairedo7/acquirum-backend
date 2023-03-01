const jwt = require('jsonwebtoken');
const { Unauthorized, Forbidden } = require('http-errors');

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  const { access_token } = req.headers;

  if (!token && !access_token) throw new Unauthorized('You are not authenticated');

  jwt.verify(token || access_token, process.env.SECRET_KEY, (err, user) => {
    if (err) throw new Forbidden('Token is invalid');
    req.user = user;
    next();
  });
};

module.exports = verifyToken;
