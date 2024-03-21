const moviesService = require("../services/moviesService");
module.exports = {
  getFilms: async (req, res) => {
    try {
      const response = await moviesService.getFilms();
      res.status(200).json({ error: false, data: response });
    } catch (error) {
      res.status(500).send({ error: true, message: error.message });
    }
  },
  postMovie: async (req, res) => {
    try {
      const { title, year, director, duration, genre, rate } = req.body;
      const movieCreated = await moviesService.postMovie({
        title,
        year,
        director,
        duration,
        genre,
        rate,
      });
      res.status(201).json({ error: false, data: movieCreated });
    } catch (error) {
      res.status(500).json({ error: true, message: error.message });
    }
  },
};
