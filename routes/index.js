const router = require('express').Router();
const users = require('./users');
const movies = require('./movies');
const { signup, signin, signout } = require('../controllers/users');
const NotFoundError = require('../errors/NotFoundError');
const { signupPattern, signinPattern } = require('../middlewares/validation');
const { PATH_NOT_FOUND_MSG } = require('../utils/constants');

router.post('/signup', signupPattern, signup);
router.post('/signin', signinPattern, signin);
router.post('/signout', signout);

router.use('/users', users);
router.use('/movies', movies);

router.use('*', () => {
  throw new NotFoundError(PATH_NOT_FOUND_MSG);
});

module.exports = router;
