const { Router } = require("express");
const moviesController = require("../controllers/moviesController");

const moviesRoute = Router();

moviesRoute.get("/", moviesController.getFilms);
moviesRoute.post("/", moviesController.postMovie);

module.exports = moviesRoute;
