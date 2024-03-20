require("dotenv").config();
const { BASE_URL } = process.env;
const axios = require("axios");
const { Movies } = require("../types/class");
const moviesValidations = require("../utils/validations/moviesValisations");

module.exports = {
  getFilms: async () => {
    try {
      const { data } = await axios(BASE_URL);
      const movies = data.map((movie) => {
        if (!moviesValidations(movie)) {
          throw new Error("Missing required fields");
        }
        return new Movies(movie);
      });
      return movies;
    } catch (error) {
      throw new Error(error);
    }
  },
};
