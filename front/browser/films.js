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

/***/ "./scripts/createFilms.js":
/*!********************************!*\
  !*** ./scripts/createFilms.js ***!
  \********************************/
/***/ (() => {

eval("// Declaración de Géneros y Selección de Elementos del DOM\r\nconst genres = [\r\n  \"Action\",\r\n  \"Fantasy\",\r\n  \"Comedy\",\r\n  \"Drama\",\r\n  \"Sci-fi\",\r\n  \"Terror\",\r\n  \"Adventure\",\r\n];\r\nconst btnSubmit = document.getElementById(\"btnSubmit\");\r\nconst btnCleaner = document.getElementById(\"btnCleaner\");\r\nconst options = document.getElementById(\"options\");\r\nconst title = document.getElementById(\"title\");\r\nconst year = document.getElementById(\"year\");\r\nconst director = document.getElementById(\"director\");\r\nconst duration = document.getElementById(\"duration\");\r\nconst rate = document.getElementById(\"rate\");\r\nconst poster = document.getElementById(\"poster\");\r\n\r\n// Función para Renderizar los Géneros\r\nfunction renderGenres() {\r\n  options.innerHTML = \"\";\r\n  console.log(\"crear los generos\");\r\n\r\n  for (const genre of genres) {\r\n    const input = document.createElement(\"input\");\r\n    const label = document.createElement(\"label\");\r\n\r\n    input.type = \"checkbox\";\r\n    input.id = genre;\r\n    input.name = \"genre[]\";\r\n    input.value = genre;\r\n\r\n    label.htmlFor = genre;\r\n    label.textContent = genre;\r\n\r\n    options.appendChild(input);\r\n    options.appendChild(label);\r\n  }\r\n  return options;\r\n}\r\nrenderGenres();\r\n\r\n// Función para Validar los Géneros Seleccionados\r\nfunction validateCheckboxes() {\r\n  const checkboxes = document.querySelectorAll('input[name=\"genre[]\"]');\r\n  const selectedGenres = [];\r\n\r\n  for (const item of checkboxes) {\r\n    if (item.checked) {\r\n      selectedGenres.push(item.value);\r\n    }\r\n  }\r\n\r\n  console.log(\"Selected genres:\", selectedGenres);\r\n  return selectedGenres;\r\n}\r\n\r\n// Manejador del Evento Submit\r\nasync function handlerSubmit(event) {\r\n  event.preventDefault();\r\n\r\n  const selectedGenres = validateCheckboxes();\r\n\r\n  if (\r\n    ![\r\n      title.value,\r\n      year.value,\r\n      director.value,\r\n      duration.value,\r\n      rate.value,\r\n      poster.value,\r\n      selectedGenres.length,\r\n    ].every(Boolean)\r\n  ) {\r\n    console.log(\"Validación fallida: Campos o géneros faltantes.\");\r\n    return alert(\"Faltan Algunos Campos\");\r\n  }\r\n\r\n  const filmData = {\r\n    title: title.value,\r\n    year: year.value,\r\n    director: director.value,\r\n    duration: duration.value,\r\n    rate: rate.value,\r\n    poster: poster.value,\r\n    genre: selectedGenres,\r\n  };\r\n\r\n  console.log(\"Enviando datos de la película:\", filmData);\r\n\r\n  try {\r\n    const response = await axios.post(\r\n      \"http://localhost:3000/movies\",\r\n      filmData,\r\n      {\r\n        headers: {\r\n          \"Content-Type\": \"application/json\",\r\n        },\r\n      }\r\n    );\r\n\r\n    if (response.status === 200) {\r\n      console.log(\"Película guardada correctamente:\", response.data);\r\n      alert(\"Película guardada correctamente\");\r\n      cleanInputs(); // Limpiar el formulario después de guardar\r\n    } else {\r\n      console.log(\"Error al guardar la película:\", response.status);\r\n      alert(\"Error al guardar la película\");\r\n    }\r\n  } catch (error) {\r\n    console.error(\"Error al guardar la película:\", error);\r\n    alert(\"Error al guardar la película\");\r\n  }\r\n}\r\n\r\n// Función para Limpiar los Campos del Formulario\r\nfunction cleanInputs() {\r\n  title.value = \"\";\r\n  year.value = \"\";\r\n  director.value = \"\";\r\n  duration.value = \"\";\r\n  rate.value = \"\";\r\n  poster.value = \"\";\r\n\r\n  const checkboxes = document.querySelectorAll('input[name=\"genre[]\"]');\r\n\r\n  for (const item of checkboxes) {\r\n    item.checked = false;\r\n    item.classList.remove(\"selected\");\r\n  }\r\n\r\n  console.log(\"Form limpiado.\");\r\n}\r\n\r\n// Asignación de Eventos a los Botones\r\nbtnSubmit.removeEventListener(\"click\", handlerSubmit); // Prevenir múltiple adjunciones\r\nbtnSubmit.addEventListener(\"click\", handlerSubmit);\r\nbtnCleaner.addEventListener(\"click\", cleanInputs);\r\n\n\n//# sourceURL=webpack://front/./scripts/createFilms.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./scripts/createFilms.js"]();
/******/ 	
/******/ })()
;