// condicionales 
//si la nota es menor a 60. Si la nota esta entre 60 y 89. Y si la nota es 90

const prompt = require("prompt-sync")({ sigint: true });

let nota = 85;

if ( nota<60 ) {
    console.log ("Reprobado");
} else if (nota >= 60 && nota<=89){
    console.log ("Aprobado");
}else{ 
    console.log ("Calificacion excelente!");
}

