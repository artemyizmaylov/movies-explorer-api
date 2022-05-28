const movieModel = require('../models/movie');
const ForbiddenError = require('../errors/ForbiddenError');
const NotFoundError = require('../errors/NotFoundError');

const { NOT_FOUND_MSG, DELETE_FORBIDDEN_MSG } = require('../utils/constants');

module.exports.getMovies = (req, res, next) => {
  movieModel.find({})
    .then((movies) => res.send(movies))
    .catch(next);
};

module.exports.createMovie = (req, res, next) => {
  req.body.owner = req.user.id;
  req.body.movieId = req.user.id;

  movieModel.create(req.body)
    .then((movie) => res.send(movie))
    .catch(next);
};

module.exports.deleteMovie = (req, res, next) => {
  movieModel.findById(req.params._id)
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError(NOT_FOUND_MSG);
      }

      if (movie.owner.toString() !== req.user.id) {
        throw new ForbiddenError(DELETE_FORBIDDEN_MSG);
      }

      movieModel.deleteOne(movie._id)
        .then((deleted) => res.send(deleted));
    })
    .catch(next);
};
