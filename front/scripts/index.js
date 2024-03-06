console.log(tempData);

// Encontrar el Contenedor de las tarjetas

const containerPremier = document.getElementById("container-premier");


//Mapear el Array 

//Es el array donde voy a llamar el metodo.forEach con el parametro pelicula en la arrow function
tempData.forEach(pelicula => {

// inicializo la variable donde guardar los elementos creados 
const cardPremier = document.createElement("div");
//asigno la clase para poder modificar el CSS
  //clase para containerPremier
/* cardPremier.classList.add("container-premier")   */
  //clase para cardPremier
cardPremier.classList.add("card-Movie-Premier")

//Defino el contenido del container-premier
/* containerPremier.innerHTML = 
  //utilizo templateString para concatenar la informacion
`<img src="${pelicula.poster}" alt="${pelicula.title}">` */


//Defino el contenido de cada cardPremier
cardPremier.innerHTML=

  //utilizo templateString para concatenar la informacion 
  //de momento el div sirve pero hay que investigar mejor 
 `<h2>${pelicula.title}</h2>
 
  <div class="img-container">
    <img src="${pelicula.poster}" alt="${pelicula.title}">
  </div>
  <p><strong>Año:</strong> ${pelicula.year}</p>
  <p>Genero: ${pelicula.genre}</p>
  <p>Director: ${pelicula.director}</p>
  <p>Duration: ${pelicula.duration}</p>
  <p>Rate: ${pelicula.rate}</p>
`

//Agrgar las cardPremier al containerPremier 
containerPremier.appendChild(cardPremier);


})