const axios = require("axios");

const renderFilms = require("./renderFilms");

const getFilms = () => {
  axios("http://localhost:3000/movies").then(
    ({ data }) => data.forEach(renderFilms)
    // .catch((error) => console.log(error.message)); para
  );
};

module.exports = getFilms;
