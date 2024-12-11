//Factorial de un número 
// Crea una función expresada llamada calcularFactorial que reciba un número y devuelva su factorial.


const prompt = require('prompt-sync')()

 const calcularFactorial = function(n){
     if (n < 0) {
    return "El factorial no está definido para números negativos."
 }

 let resultado = 1                            // El acumulador empieza en 1

 for (let i=n; i>1; i--){                   //desde n hasta 2

 resultado *= i                            // multiplica resultado por i
}

return resultado;
};

console.log (calcularFactorial(5));
console.log (calcularFactorial(8));
console.log (calcularFactorial(0));
console.log (calcularFactorial(-5));