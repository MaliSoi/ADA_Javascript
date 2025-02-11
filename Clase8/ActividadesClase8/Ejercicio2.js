// En este ejercicio, practicarás el uso de condicionales (if, else). Escribe un programa en JavaScript que:
//1. Pida al usuario que ingrese un número. 
//2. Verifique si el número es positivo, negativo o igual a cero. (Utilizar estructura control flujo if/ if else /else y verificarlas)
//3. Muestre un mensaje indicando cuál es el caso. 
//Usar parseFloat para convertir la entrada del usuario a un numero.


const prompt = require('prompt-sync')();

let numero = parseFloat (prompt (' Ingrese un numero: '));
if (numero > 0){
    console.log ("Positivo"); 
}else if (numero < 0){
    console.log ("Negativo");
}else{
    console.log ("El numero es cero")
}



