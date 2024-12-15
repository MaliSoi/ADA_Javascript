//En este ejercicio, trabajaremos con una lista de modelos de autos. Implementa una función llamada ultimaAparicionModeloAuto(modelo)
// que encuentre y muestre la última posición en la lista donde aparece el modelo específico de auto dado por modelo.

const prompt = require('prompt-sync')()

function ultimaAparicionModeloAuto (modelo){
   const modelosAutos = ["Toyota", "Suzuki", "Honda Fit", "Ford Fiesta", "Toyota"];

   //recorremos la lista del final hacia el ppcio. 

   for(let i = modelosAutos.length -1; i>= 0; i --){
    if (modelosAutos[i] === modelo){
        return i  //retornamos la posicion indice
   }
}
//si no se encontro el modelo, devolvemos -1 o un mensaje
 return "El modelo no está presente";
}
//Prueba la funcion 

console.log (ultimaAparicionModeloAuto ("Toyota"));
console.log (ultimaAparicionModeloAuto("Ferrari"));





