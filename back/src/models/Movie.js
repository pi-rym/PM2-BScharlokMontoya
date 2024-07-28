const { Schema, model } = require("mongoose");

//Definición del esquema
const movieSchema = new Schema({
  title: String,
  year: Number,
  director: String,
  duration: String,
  genre: Array,
  rate: Number,
  poster: String,
});

//Creación del modelo
const Movie = model("Movie", movieSchema);

module.exports = Movie;
