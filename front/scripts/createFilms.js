// Declaración de Géneros y Selección de Elementos del DOM
const genres = [
  "Action",
  "Fantasy",
  "Comedy",
  "Drama",
  "Sci-fi",
  "Terror",
  "Adventure",
];
const form = document.getElementById("formFilm");
const options = document.getElementById("options");
const title = document.getElementById("title");
const year = document.getElementById("year");
const director = document.getElementById("director");
const duration = document.getElementById("duration");
const rate = document.getElementById("rate");
const poster = document.getElementById("poster");

// Función para Renderizar los Géneros
function renderGenres() {
  options.innerHTML = "";
  console.log("crear los generos");

  for (const genre of genres) {
    const input = document.createElement("input");
    const label = document.createElement("label");

    input.type = "checkbox";
    input.id = genre;
    input.name = "genre[]";
    input.value = genre;

    label.htmlFor = genre;
    label.textContent = genre;

    options.appendChild(input);
    options.appendChild(label);
  }
  return options;
}
renderGenres();

// Función para Validar los Géneros Seleccionados
function validateCheckboxes() {
  const checkboxes = document.querySelectorAll('input[name="genre[]"]');
  const selectedGenres = [];

  for (const item of checkboxes) {
    if (item.checked) {
      selectedGenres.push(item.value);
    }
  }

  console.log("Selected genres:", selectedGenres);
  return selectedGenres;
}

// Manejador del Evento Submit
async function handlerSubmit(event) {
  event.preventDefault();

  const selectedGenres = validateCheckboxes();

  if (
    ![
      title.value,
      year.value,
      director.value,
      duration.value,
      rate.value,
      poster.value,
      selectedGenres.length,
    ].every(Boolean)
  ) {
    console.log("Validación fallida: Campos o géneros faltantes.");
    return alert("Faltan Algunos Campos");
  }

  const filmData = {
    title: title.value,
    year: year.value,
    director: director.value,
    duration: duration.value,
    rate: rate.value,
    poster: poster.value,
    genre: selectedGenres,
  };

  console.log("Enviando datos de la película:", filmData);

  try {
    const response = await axios.post(
      "http://localhost:3000/movies",
      filmData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      console.log("Película guardada correctamente:", response.data);
      alert("Película guardada correctamente");
      cleanInputs(); // Limpiar el formulario después de guardar
    } else {
      console.log("Error al guardar la película:", response.status);
      // alert("Error al guardar la película");
    }
  } catch (error) {
    console.error("Error al guardar la película:", error);
    alert("envio exitoso al guardar la película");
  }
}

// Función para Limpiar los Campos del Formulario
function cleanInputs() {
  title.value = "";
  year.value = "";
  director.value = "";
  duration.value = "";
  rate.value = "";
  poster.value = "";

  const checkboxes = document.querySelectorAll('input[name="genre[]"]');

  for (const item of checkboxes) {
    item.checked = false;
    item.classList.remove("selected");
  }

  console.log("Form limpiado.");
}

// Asignación del Evento Submit al Formulario
form.addEventListener("submit", handlerSubmit);

// Asignación de Eventos al Botón Limpiar
btnCleaner.addEventListener("click", cleanInputs);
