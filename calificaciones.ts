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

let nombreAlumno: string = prompt("Alumno: ");
let notaFinal: number = 0;

while (nombreAlumno !== "") {
  let notaPractica: number = Number(prompt("Ingrese la NOTA PRACTICA: "));
  let notaProblemas: number = Number(prompt("Ingrese la NOTA DE PROBLEMAS: "));
  let notaTeorica: number = Number(prompt("Ingrese la NOTA TEORICA: "));
  if (
    notaPractica >= 0 &&
    notaPractica <= 10 &&
    notaProblemas >= 0 &&
    notaProblemas <= 10 &&
    notaTeorica >= 0 &&
    notaTeorica <= 10
  ) {
    notaFinal = notaPractica * 0.1 + notaProblemas * 0.5 + notaTeorica * 0.4;
    console.log(
      "La NOTA FINAL del Alumno " + nombreAlumno + " es: " + notaFinal
    );
  } else {
    console.log(
      "ERROR, ALGUNA DE LAS NOTAS NO CUMPLE CONDICION. SIGUIENTE ALUMNO"
    );
  }
  nombreAlumno = prompt("Ingrese OTRO Alumno: ");
}
