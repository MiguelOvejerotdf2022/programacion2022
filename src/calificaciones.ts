/*Calcular las calificaciones de un grupo de alumnos, donde la nota
final de cada alumno se calcula según el siguiente criterio:
• la parte práctica vale el 10%
• la parte de problemas vale el 50%
• la parte teórica el 40%
Se debe ingresar el nombre del alumno y sus tres notas, se
escribirá el resultado y se volverá a pedir los datos del siguiente
alumno hasta que el nombre sea una cadena vacía
Las notas deben estar entre 0 y 10 (si no lo están, no imprimirá las
notas, mostrará un mensaje de error y continuará con otro alumno)*/
let nombreAlumno: string;
let notaPractica: number;
let notaProblemas: number;
let notaTeorica: number;

while (nombreAlumno !== " ") {
  nombreAlumno = prompt("Alumno: ");
  notaPractica = Number(prompt("Ingrese la NOTA PRACTICA: "));
  notaProblemas = Number(prompt("Ingrese la NOTA DE PROBLEMAS: "));
  notaTeorica = Number(prompt("Ingrese la NOTA TEORICA: "));
}

console.log("Alumno:", nombreAlumno);
console.log("Nota Practica: ", notaPractica);
console.log("Nota Problemas: ", notaProblemas);
console.log("Nota Teorica: ", notaTeorica);