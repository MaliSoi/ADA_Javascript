//Define dos objetos libro1 y libro2 con las siguientes propiedades y valores:
//titulo/autor/anioPublicacion
//Luego, crea una función llamada mostrarLibro que tome un arreglo de libros como 
//parámetro y muestre por consola la información de cada libro en el formato especificado.

const prompt = require('prompt-sync')()

let libro1 ={
    titulo: 'Todos los Fuegos el Fuego',
    autor: 'Julio Cortázar',
    anioPublicacion: 1966
};

let libro2 ={
    titulo: 'Espantapájaros',
    autor: 'Oliverio Girondo',
    anioPublicacion: 1932
};

//function mostrarLibro (libro1, libro2){
    function mostrarLibro (libros){
        for (let i = 0; i< libros.length; i++){
            let libro =libros[i];
console.log (`El libro: ${libros[i].titulo}, escrito por ${libros[i].autor} en el año: ${libros[i].anioPublicacion}`);
        }
        };

        let biblioteca = [libro1, libro2];//arreglo

        mostrarLibro(biblioteca);