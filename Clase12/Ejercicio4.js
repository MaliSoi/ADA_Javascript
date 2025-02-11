//Ciclo For - Array
//Crear un programa que permita registrar las notas de varios estudiantes usando arrays y mostrarlas por pantalla:
//1.Crear un array para almacenar las notas.
//2.Define un array vacío llamado notas donde almacenaremos las notas de los estudiantes.
//3.Pide al usuario que ingrese las notas de varios estudiantes una por una utilizando el método prompt.
//4.Usa un bucle for para solicitar las notas y asignarlas directamente a posiciones específicas del array notas.
//5.Imprime en consola las notas ingresadas usando el array notas

const prompt = require('prompt-sync')();

let studentGrades = [];

const numberOfStudents = 4;

console.log (`Ingresa las notas de los ${numberOfStudents} estudiantes:`);

for (let i = 0; i< numberOfStudents; i ++){
    let studentGrades = parseFloat (prompt(` Nota del estudiante ${i+1}:`));
    studentGrades[i] = studentGrades;
}

console.log ("\nNotas Ingresadas:");

for ( let i = 0; i<studentGrades.length;i++){
    console.log (`Estudiante ${i+1}: ${studentGrades[i]}`);
    
}
 // No llego a imprimir en consola las notas ingresadas usando el array notas.-
