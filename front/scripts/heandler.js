//? requerimos la funciion
const renderFilms = require("./renderFilms");

// se encarga de guardar la info de las peliculas
const getFilms = () => {
  //? voy a iterar o recorrer el array en este caso
  // recibo el array desde el servidor externo
  /* tempData.forEach(renderFilms); */
  $.get("https://students-api.up.railway.app/movies", (data) =>
    data.forEach(renderFilms)
  );
};

module.exports = getFilms;
