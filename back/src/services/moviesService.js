const { Movies } = require("../types/class");
const moviesValidations = require("../utils/validations/moviesValisations");
const Movie = require("../models/Movie");
module.exports = {
  getFilms: async () => {
    try {
      const movies = await Movie.find();
      const moviesCollection = movies.map((movie) => {
        if (!moviesValidations(movie)) {
          throw new Error("Missing required fields");
        }
        return new Movies(movie);
      });
      return moviesCollection;
    } catch (error) {
      throw new Error(error);
    }
  },
  postMovie: async (movie) => {
    try {
      const movieCreated = await Movie.create(movie);
      return movieCreated;
    } catch (error) {
      throw Error(error.message);
    }
  },
};
