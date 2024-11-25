//Intercambio de Valores: Declara dos variables con valores iniciales y luego intercambia sus valores. 
//Muestra los valores antes y después del intercambio en la consola. 
//Para intercambiar valores puedes usar varios métodos(usando una variable temporal, aritmética o asignación simultanea),
// eres libre de elegir el que desees, eso si, investiga sobre el que usaras.

const prompt = require('prompt-sync')();

leta = 6
letb = 20

//console.log ("Antes del intercambio: a =", b =" );
//console.log ( "Antes del intercambio:" a,b );
console.log ( "Antes del intercambio: a =", a, ", b =", b);


//lettemp = a;
//a=b
//b=temp;
[a, b] = [b, a];

//console.log ("Después del intercambio: a =", b =" )
//console.log ( "Después del intercambio:" temp,b );
console.log ( "Después del intercambio: a =", a , ", b =", b);
//no me sale!

