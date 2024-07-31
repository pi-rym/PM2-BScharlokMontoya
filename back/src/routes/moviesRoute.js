const { Router } = require("express");
const moviesController = require("../controllers/moviesController");

const moviesRoute = Router();

// Asegúrate de que estás llamando al método correcto en el controlador
moviesRoute.get("/", moviesController.getFilms); // Aquí se está llamando al método `getFilms`

moviesRoute.post("/", moviesController.addMovie); // Agregar esta ruta maneja los POST

module.exports = moviesRoute;
