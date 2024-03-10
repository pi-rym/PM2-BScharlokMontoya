console.log(tempData);
//! nuevo codigo

//?  segundo guardo la informacion  <= primero llamo mi container
const containerPremier = document.getElementById("container-premier");

//? voy a iterar o recorrer el array en este caso
// recibo el array desde el servidor externo
$.get("https://students-api.2.us-1.fl0.io/movies", (data) =>
  data.forEach(renderFilms)
);

//recibo el parametro de la funcion y creo las tarjetas
function renderFilms(pelicula) {
  //crear un contenedor adicional pra todas las tarjetas
  const containerMovies = document.createElement("article");
  //crear los nuevos contenedores para contener una sola tarjeta
  const cardPremier = document.createElement("div");
  //crear la clase de containerMovies
  containerMovies.classList.add("container-movies");
  //crear la clase de la tarjeta
  cardPremier.classList.add("card-premier");

  //establesco el contenido que va a tener cada contenedor
  containerMovies.innerHTML = ` 
    <img src="${pelicula.poster}" alt="${pelicula.title}" class="imgPremier">
    `;
  cardPremier.innerHTML = `
    <h3>${pelicula.title}</h3>
    <p><strong>Año:</strong> ${pelicula.year}</p>
    <p><strong>Director:</strong> ${pelicula.director}</p>
    <p><strong>Duracion:</strong> ${pelicula.duration}</p>
    <p><strong>Genero:</strong> ${pelicula.genre}</p>
    <p><strong>Calificacion:</strong> ${pelicula.rate}</p>    
    `;
  //estables quien es padre de quien
  containerPremier.appendChild(containerMovies);
  containerMovies.appendChild(cardPremier);
}
