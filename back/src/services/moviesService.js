const Movie = require("../models/Movie");
const moviesValidations = require("../utils/validations/moviesValisations");

module.exports = {
  getFilms: async () => {
    try {
      const movies = await Movie.find();
      const moviesCollection = movies.map((movie) => {
        if (!moviesValidations(movie)) {
          throw new Error("Missing required fields");
        }
        return movie;
      });
      return moviesCollection;
    } catch (error) {
      throw new Error(error);
    }
  },

  addMovie: async (movieData) => {
    try {
      // Validar datos antes de guardarlos
      if (!moviesValidations(movieData)) {
        throw new Error("Missing required fields");
      }
      // Crear nueva instancia del modelo y guardarla
      const newMovie = new Movie(movieData);
      await newMovie.save();
      return newMovie;
    } catch (error) {
      throw new Error(error);
    }
  },
};
