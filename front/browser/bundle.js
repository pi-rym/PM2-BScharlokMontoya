/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/heandler.js":
/*!*****************************!*\
  !*** ./scripts/heandler.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("//? requerimos la funciion\r\nconst renderFilms = __webpack_require__(/*! ./renderFilms */ \"./scripts/renderFilms.js\");\r\n\r\n// se encarga de guardar la info de las peliculas\r\nconst getFilms = () => {\r\n  //? voy a iterar o recorrer el array en este caso\r\n  // recibo el array desde el servidor externo\r\n  $.get(\"https://students-api.up.railway.app/movies\", (data) =>\r\n    data.forEach(renderFilms)\r\n  );\r\n};\r\n\r\nmodule.exports = getFilms;\r\n\n\n//# sourceURL=webpack://front/./scripts/heandler.js?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const getFilms = __webpack_require__(/*! ./heandler */ \"./scripts/heandler.js\");\r\n\r\ngetFilms();\r\n\n\n//# sourceURL=webpack://front/./scripts/index.js?");

/***/ }),

/***/ "./scripts/renderFilms.js":
/*!********************************!*\
  !*** ./scripts/renderFilms.js ***!
  \********************************/
/***/ ((module) => {

eval("//! nuevo codigo\r\n//?  segundo guardo la informacion  <= primero llamo mi container\r\nconst containerPremier = document.getElementById(\"container-premier\");\r\n\r\n/* tempData.forEach(renderFilms); */\r\n//recibo el parametro de la funcion y creo las tarjetas\r\nfunction renderFilms(pelicula) {\r\n  //crear un contenedor adicional pra todas las tarjetas\r\n  const containerMovies = document.createElement(\"article\");\r\n  //crear los nuevos contenedores para contener una sola tarjeta\r\n  const cardPremier = document.createElement(\"div\");\r\n  //crear la clase de containerMovies\r\n  containerMovies.classList.add(\"container-movies\");\r\n  //crear la clase de la tarjeta\r\n  cardPremier.classList.add(\"card-premier\");\r\n\r\n  //establesco el contenido que va a tener cada contenedor\r\n  containerMovies.innerHTML = ` \r\n    <img src=\"${pelicula.poster}\" alt=\"${pelicula.title}\" class=\"imgPremier\">\r\n    `;\r\n  cardPremier.innerHTML = `\r\n    <h3>${pelicula.title}</h3>\r\n    <p><strong>Año:</strong> ${pelicula.year}</p>\r\n    <p><strong>Director:</strong> ${pelicula.director}</p>\r\n    <p><strong>Duracion:</strong> ${pelicula.duration}</p>\r\n    <p><strong>Genero:</strong> ${pelicula.genre}</p>\r\n    <p><strong>Calificacion:</strong> ${pelicula.rate}</p>    \r\n    `;\r\n  //estables quien es padre de quien\r\n  containerPremier.appendChild(containerMovies);\r\n  containerMovies.appendChild(cardPremier);\r\n}\r\n\r\n//? Exportamos la funcion para hacerla visible\r\nmodule.exports = renderFilms;\r\n\n\n//# sourceURL=webpack://front/./scripts/renderFilms.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;