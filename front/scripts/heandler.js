const axios = require("axios");

const renderFilms = require("./renderFilms");

const getFilms = () => {
  axios("https://students-api.up.railway.app/movies").then(
    ({ data }) => data.forEach(renderFilms)
    // .catch((error) => console.log(error.message)); para
  );
};

module.exports = getFilms;
