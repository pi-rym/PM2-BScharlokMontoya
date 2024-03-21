const axios = require("axios");
const createFilms = require("./createFilms");
const renderFilms = require("./renderFilms");

const getFilms = () => {
  axios("http://localhost:3000/movies").then(
    ({ data }) => data.forEach(renderFilms)
    // .catch((error) => console.log(error.message)); para
  );
};
const bntSubmit = document.getElementById("bntSubmit");
bntSubmit?.addEventListener("click", createFilms);

module.exports = getFilms;
