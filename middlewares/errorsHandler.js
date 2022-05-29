const {
  BAD_REQ_CODE,
  CONFLICT_CODE,
  DEFAUTL_CODE,
  EMAIL_EXIST_MSG,
  INCORRECT_ID_MSG,
  INCORRECT_DATA_MSG,
  DEFAUTL_MSG,
  UNAUTH_MSG,
  UNAUTH_CODE,
} = require('../utils/constants');

module.exports = (err, req, res, next) => {
  const { statusCode = DEFAUTL_CODE, message = DEFAUTL_MSG } = err;

  switch (err.name) {
    case 'MongoServerError':
      res.status(CONFLICT_CODE).send({ message: EMAIL_EXIST_MSG });
      break;
    case 'CastError':
      res.status(BAD_REQ_CODE).send({ message: INCORRECT_ID_MSG });
      break;
    case 'ValidationError':
      res.status(BAD_REQ_CODE).send({ message: INCORRECT_DATA_MSG });
      break;
    case 'TokenExpiredError':
      res.clearCookie('jwt').status(UNAUTH_CODE).send({ message: UNAUTH_MSG });
      break;
    default:
      res.status(statusCode).send({ message });
  }

  next();
};
