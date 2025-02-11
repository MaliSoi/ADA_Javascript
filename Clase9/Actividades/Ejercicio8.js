//Pide al usuario que ingrese las longitudes de los tres lados de un triángulo.
//Determina y muestra si el triángulo es equilátero, isósceles o escaleno. 
//(Investiga sobre los triángulos para determinar la formula)

const prompt = require('prompt-sync')();

let longitud1 = parseFloat (prompt ("Ingrese cuanto mide uno de los lados del triángulo:"));
let longitud2 = parseFloat (prompt ("Ingrese cuanto mide otro de los lados del triángulo:"));
let longitud3 = parseFloat (prompt ("Ingrese cuanto mide el último de los lados del triángulo:"));

//if (longitud1 == longitud2 = longitud3){
    if (longitud1 === longitud2 && longitud2=== longitud3){
    console.log ("El triángulo es equilátero")
} else if ((longitud1 === longitud2) || (longitud2 === longitud3) || (longitud1 === longitud3)){
    console.log ("El triángulo es isósceles")

 //else if (longitud2 != (longitud1 = longitud3)){
    //console.log ("El triángulo es isósceles")
//} else if (longitud3 != (longitud1 = longitud2)){
    //console.log ("El triángulo es isósceles")

} else {
    console.log ("El triángulo es escaleno") 
}   