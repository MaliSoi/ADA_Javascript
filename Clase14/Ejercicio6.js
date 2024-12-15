


const prompt = require('prompt-sync')()

let deportista ={
    nombre: 'Diego',
    energia: 100,
    experiencia: 10,
    entrenarHoras: function (n) {
        //restar la energia
        this.energia = this.energia - (n * 5);
        //Incrementa la experiencia segun hs entrenadas
        this.experiencia = this.experiencia + (n * 2);
         // Devolver el estado actualizado
         return `Entrenó ${n} horas. Energía restante: ${this.energia}, Experiencia: ${this.experiencia}`;
        }
    };


//Mostrar estado inicial del deportista
console.log ("== Antes de comenzar entrenamiento ==");
console.log (" Deportista energia:" + deportista.energia);
console.log(" Deportista experiencia:" + deportista.experiencia);

//simular entrenamiento

console.log ("== ENTRENANDO ==")
console.log (deportista.entrenarHoras (5) );

//Mostrar el estado despues de entrenar
console.log ("== FIN DE ENTRENAMIENTO ==");
console.log("Deportista energía:" + deportista.energia);
console.log ("Deportista experiencia: " + deportista.experiencia);