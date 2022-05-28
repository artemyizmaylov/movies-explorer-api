const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user');
const { secretTokenKey } = require('../utils/config');
const { SIGNIN_MSG, SIGNOUT_MSG } = require('../utils/constants');

const { NODE_ENV, JWT_SECRET = secretTokenKey } = process.env;

module.exports.getCurrentUser = (req, res, next) => {
  userModel.findById(req.user.id)
    .then((user) => res.send(user))
    .catch(next);
};

module.exports.updateCurrentUser = (req, res, next) => {
  userModel.findByIdAndUpdate(
    req.user.id,
    req.body,
    { new: true, runValidators: true },
  )
    .then((user) => res.send(user))
    .catch(next);
};

module.exports.signup = (req, res, next) => {
  const { name, email, password } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => {
      userModel.create({ name, email, password: hash })
        .then((user) => {
          const newUser = user.toObject();
          delete newUser.password;
          res.send(newUser);
        });
    })
    .catch(next);
};

module.exports.signin = (req, res, next) => {
  const { email, password } = req.body;
  userModel.findUserByCredentials({ email, password })
    .then((user) => {
      const token = jwt.sign(
        { id: user._id },
        NODE_ENV !== 'production' ? JWT_SECRET : secretTokenKey,
        { expiresIn: '7d' },
      );

      res
        .cookie('jwt', token, {
          httpOnly: true,
        })
        .send({ message: SIGNIN_MSG });
    })
    .catch(next);
};

module.exports.signout = (req, res, next) => {
  res
    .clearCookie('jwt')
    .send({ message: SIGNOUT_MSG })
    .catch(next);
};
