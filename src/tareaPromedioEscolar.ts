/*Desarrolle un algoritmo que permita cargar alumnos y sus notas en los
tres trimestres.
Se debe permitir obtener el promedio anual (es decir, de sus tres notas)
de un alumno (ingresado por el usuario)
Luego de resolverlo, pensar en aprovechar métodos y discutir como representar
la información. */
let longitud_Arreglo: number = Number(prompt("Ingrese cantidad de Alumnos: "));
let arreglo_Nombres: string[] = new Array(longitud_Arreglo);
let arreglo_Trimestre1: number[] = new Array(longitud_Arreglo);
let arreglo_Trimestre2: number[] = new Array(longitud_Arreglo);
let arreglo_Trimestre3: number[] = new Array(longitud_Arreglo);
let arreglo_Promedio: number[] = new Array(longitud_Arreglo);

for (let indice: number = 0; indice < longitud_Arreglo; indice++) {
  arreglo_Nombres[indice] = prompt("Ingrese Nombre del Alumno: ");
  arreglo_Trimestre1[indice] = Number(prompt("Ingrese 1° Nota: "));
  arreglo_Trimestre2[indice] = Number(prompt("Ingrese 2° Nota: "));
  arreglo_Trimestre3[indice] = Number(prompt("Ingrese 3° Nota: "));
  arreglo_Promedio[indice] =
    (arreglo_Trimestre1[indice] +
      arreglo_Trimestre2[indice] +
      arreglo_Trimestre3[indice]) /
    3;
}

console.log("** ALUMNOS -- NOTAS -- PROMEDIO FINAL **");
for (let indice: number = 0; indice < longitud_Arreglo; indice++) {
  console.log(
    arreglo_Nombres[indice] +
      ":  [ " +
      arreglo_Trimestre1[indice] +
      "  " +
      arreglo_Trimestre2[indice] +
      "  " +
      arreglo_Trimestre3[indice] +
      " ] = " +
      arreglo_Promedio[indice]
  );
}
