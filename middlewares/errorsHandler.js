const {
  BAD_REQ_CODE,
  CONFLICT_CODE,
  DEFAUTL_CODE,
  EMAIL_EXIST_MSG,
  INCORRECT_ID_MSG,
  INCORRECT_DATA_MSG,
  DEFAUTL_MSG,
} = require('../utils/constants');

module.exports = (err, req, res, next) => {
  const { statusCode = DEFAUTL_CODE, message } = err;

  if (err.code === 11000) {
    res.status(CONFLICT_CODE).send({ message: EMAIL_EXIST_MSG });
  } else if (err.name === 'CastError') {
    res.status(BAD_REQ_CODE).send({ message: INCORRECT_ID_MSG });
  } else if (err.name === 'ValidationError') {
    res.status(BAD_REQ_CODE).send({ message: INCORRECT_DATA_MSG });
  } else {
    res.status(statusCode).send(statusCode === DEFAUTL_CODE
      ? { message: DEFAUTL_MSG }
      : { message });
    next();
  }
};
