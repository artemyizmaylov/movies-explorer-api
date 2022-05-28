const router = require('express').Router();
const { getCurrentUser, updateCurrentUser } = require('../controllers/users');
const auth = require('../middlewares/auth');
const { patchUserPattern } = require('../middlewares/validation');

router.use(auth);

router.route('/me')
  .get(getCurrentUser)
  .patch(patchUserPattern, updateCurrentUser);

module.exports = router;
