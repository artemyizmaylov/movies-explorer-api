const router = require('express').Router();
const auth = require('../middlewares/auth');
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');
const { idPattern } = require('../middlewares/validation');

router.use(auth);
router.route('/')
  .get(getMovies)
  .post(createMovie);

router.delete('/:_id', idPattern, deleteMovie);

module.exports = router;
