//Encuentra los múltiplos de un número.
//Escribe un programa que le pida al usuario un número entero positivo 
//y muestre todos los múltiplos de ese número entre 1 y 100. Utiliza un ciclo for para resolverlo.

const prompt = require('prompt-sync')();

let numero = parseInt (prompt("Ingrese un número entero positivo :"));

if (numero>1){
    console.log(`Los múltiplos del número ${numero} entre el 1 y 100 son:`)
    

for (let i = 1; i <= 100; i++ ){
    if (i % numero === 0){
    console.log (i);
}
}

} else {
    console.log ("El número ingresado no es positivo. Intenta nuevamente con un número mayor a 0.");
}


