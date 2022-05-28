const BAD_REQ_CODE = 400;
const UNAUTH_CODE = 401;
const FORBIDDEN_CODE = 403;
const NOT_FOUND_CODE = 404;
const CONFLICT_CODE = 409;
const DEFAUTL_CODE = 500;

const SIGNIN_MSG = 'Успешный вход';
const SIGNOUT_MSG = 'Успешный выход';
const UNAUTH_MSG = 'Необходима авторизация';
const NOT_FOUND_MSG = 'Данные не найдены';
const DELETE_FORBIDDEN_MSG = 'Нельзя удалять чужие фильмы';
const EMAIL_EXIST_MSG = 'Email уже зарегистрирован';
const INCORRECT_ID_MSG = 'Неправильный ID';
const INCORRECT_DATA_MSG = 'Переданы некорректные или неполные данные';
const DEFAUTL_MSG = 'На сервере произошла ошибка';

module.exports = {
  BAD_REQ_CODE,
  UNAUTH_CODE,
  FORBIDDEN_CODE,
  NOT_FOUND_CODE,
  DEFAUTL_CODE,
  CONFLICT_CODE,
  SIGNIN_MSG,
  SIGNOUT_MSG,
  UNAUTH_MSG,
  NOT_FOUND_MSG,
  DELETE_FORBIDDEN_MSG,
  EMAIL_EXIST_MSG,
  INCORRECT_ID_MSG,
  INCORRECT_DATA_MSG,
  DEFAUTL_MSG,
};
