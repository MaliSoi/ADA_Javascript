
//Encuentra la película más corta y analiza los títulos largos Supón que tienes
//  una lista de películas con su duración en minutos:
//const movies = [
//{ title: 'El Señor de los Anillos', duration: 200 },
//{ title: 'Inception', duration: 148 },
//{ title: 'Matrix', duration: 136 },
//{ title: 'Toy Story', duration: 81 },
//{ title: 'Coco', duration: 105 }
//];
//Queremos:
//Encontrar la película más corta en duración.
//De las películas restantes, quedarnos con aquellas cuyo título tenga más de 10 caracteres.
//Crear una lista de los títulos largos en minúsculas.
//Imprime en la consola:
//El título de la película más corta.
//La lista de títulos largos en minúsculas.


const movies = [
    { title: 'El Señor de los Anillos', duration: 200 },
    { title: 'Inception', duration: 148 },
    { title: 'Matrix', duration: 136 },
    { title: 'Toy Story', duration: 81 },
    { title: 'Coco', duration: 105 }
    ];

    const shorterMovie = movies.reduce((shorter, actualMovie) => {
        return actualMovie.duration < shorter.duration ? actualMovie : shorter;
    });

    console.log("Película más corta:", shorterMovie)
    
    

    const selectedMovies = movies.filter(movie=>movie !== shorterMovie);
    //console.log(selectedMovies)

   
const longTitleMovies = selectedMovies.filter(function (movie) {
 return movie.title.length >= 10;}); 

//console.log(longTitleMovies)

console.log("Películas con título largo en minúsculas:", 
    longTitleMovies.map(movie => movie.title.toLowerCase())
);


 