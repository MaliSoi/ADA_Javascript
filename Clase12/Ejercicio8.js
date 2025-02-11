//Para este ejercicio vamos a generar dos funciones:
//a) Una va a sumar los valores en la diagonal marcada en rojo.
//b) La otra va a marcar los valores de la diagonal marcada en verde.
//Ambas funciones deben devolver un resultado único. Rojo: 505-Verde 505

const prompt = require('prompt-sync')()

//Matriz generada automáticamente
const matriz = [];

let contador = 1;

for (let i = 0; i < 10; i++){
    const fila=[];
    for (let j = 0; j < 10; j++){
        fila.push (contador ++);
    }
    matriz.push(fila)
}

// Función para sumar los valores de la diagonal principal (rojo)
function sumarDiagonalRoja(matriz){
let sumaRoja = 0;                                                //iniciar variable para la suma

for (let i =0; i<matriz.length; i++){                            //recorrer la matriz y sumar
    sumaRoja += matriz [i][i];                                   //sumamos la variable de la diagonal principal
}
 return sumaRoja;                                                //Devolvemos resultado a la suma.
}

 const sumaRoja = sumarDiagonalRoja(matriz);                     // Calcular y mostrar los resultados
 console.log ( "La suma de la Diagonal Roja es:",sumaRoja)



// Función para marcar los valores de la diagonal secundaria (verde)

function sumarDiagonalVerde(matriz){
let sumaVerde = 0;                                                //iniciar variable para la suma


//recorrer la matriz y sumar
for (let i =0; i<matriz.length; i++){
    sumaVerde += matriz[i][matriz.length - 1 - i];                  //sumamos la variable de la diagonal secundaria
}
 return sumaVerde;                                                //Devolvemos resultado a la suma.
}

 const sumaVerde = sumarDiagonalVerde(matriz);                    // Calcular y mostrar los resultados
 console.log ( "La suma de la Diagonal Verde es:",sumaVerde)




