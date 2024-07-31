const moviesService = require("../services/moviesService");

const moviesController = {
  getFilms: async (req, res) => {
    try {
      const response = await moviesService.getFilms();
      res.status(200).json(response);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  addMovie: async (req, res) => {
    try {
      const newMovie = await moviesService.addMovie(req.body);
      res.status(201).json({ message: "Película guardada correctamente" });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

module.exports = moviesController;
