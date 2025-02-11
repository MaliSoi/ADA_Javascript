//Crea un programa donde la computadora seleccione un número al azar entre 1
//y 10. Luego, pide al usuario que adivine el número hasta 3 intentos. 
//Si el usuario acierta en cualquiera de los intentos, muestra un mensaje de felicitación 
//y detén los intentos restantes. Si no acierta después de los 3 intentos, 
//muestra el número secreto. Usa un for para resolver este ejercicio.

const prompt = require('prompt-sync')();

const secretNumber = Math.floor (Math.random ()* 10) + 1;

let acertado = false;

for (let intento = 1; intento <= 3; intento++) {
 const guessNumber = parseInt(prompt(`Intento ${intento}/3. Adivine el número entre el 1 y el 10:`),10);
 

if (guessNumber === secretNumber){
    console.log (" ¡Felicitaciones!, ¡Acertaste! ");
    
    acertado = true;
    break;
  } else if (intento < 3) {
    console.log ("No acertaste. ¡Sigue intentando!");
  }
}
 
if (!acertado) {
    console.log (`Lo siento. No has acertado. El número es: ${secretNumber} Si quieres vuelve a empezar.`)
       }

    
//NO ME SALE NADA. Chequeo en gtp. 

//Math.random() genera un número decimal entre 0 y 1.
//Multiplicarlo por 10 y usar Math.floor asegura que obtendremos un número entero entre 1 y 10.

// Genera un número aleatorio entre 1 y 10
