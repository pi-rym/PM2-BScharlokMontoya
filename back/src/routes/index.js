const { Router } = require("express");
const moviesRoute = require("./moviesRoute");

const router = Router();
//cualquier ruta que empiece con "/movies" debería ser manejada por > moviesRoute
router.use("/movies", moviesRoute);

module.exports = router;
