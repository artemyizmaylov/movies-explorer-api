const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/UnauthorizedError');
const { secretTokenKey } = require('../utils/config');
const { UNAUTH_MSG } = require('../utils/constants');

const { NODE_ENV, JWT_SECRET = secretTokenKey } = process.env;

module.exports = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    throw new UnauthorizedError(UNAUTH_MSG);
  }

  let payload;

  try {
    payload = jwt.verify(
      token,
      NODE_ENV === 'production' ? JWT_SECRET : secretTokenKey,
    );
  } catch (err) {
    next(err);
  }

  req.user = payload;
  next();
};
