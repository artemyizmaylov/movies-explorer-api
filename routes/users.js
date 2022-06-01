const router = require('express').Router();
const { getCurrentUser, updateCurrentUser } = require('../controllers/users');
const { patchUserPattern } = require('../middlewares/validation');

router.route('/me')
  .get(getCurrentUser)
  .patch(patchUserPattern, updateCurrentUser);

module.exports = router;
