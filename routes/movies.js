const router = require('express').Router();
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');
const { idPattern, moviePattern } = require('../middlewares/validation');

router.route('/')
  .get(getMovies)
  .post(moviePattern, createMovie);

router.delete('/:_id', idPattern, deleteMovie);

module.exports = router;
