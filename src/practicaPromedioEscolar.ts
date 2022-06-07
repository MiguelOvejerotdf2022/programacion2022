/*Desarrolle un algoritmo que permita cargar alumnos y sus notas en los
tres trimestres.
Se debe permitir obtener el promedio anual (es decir, de sus tres notas)
de un alumno (ingresado por el usuario)
Luego de resolverlo, pensar en aprovechar métodos y discutir como representar
la información. */

function cargoArregloNombres(parametro_Nombre: string[]): void {
  for (let i: number = 0; i < parametro_Nombre.length; i++) {
    parametro_Nombre[i] = prompt("Ingrese Alumno " + (i + 1) + ": ");
  }
}

function cargarArregloTrimestre(
  parametro_Trimestre: number[],
  parametroAlumno: string[]
): void {
  for (let i: number = 0; i < parametro_Trimestre.length; i++) {
    parametro_Trimestre[i] = Number(prompt(parametroAlumno[i] + " Nota: "));
  }
}

function cargarYObtenerPromedio(
  trimestre1: number[],
  trimestre2: number[],
  trimestre3: number[],
  trimestre4: number[],
  parametroAlumno: string[]
): void {
  for (let i: number = 0; i < trimestre1.length; i++) {
    trimestre4[i] = (trimestre1[i] + trimestre2[i] + trimestre3[i]) / 3;
    console.log(parametroAlumno[i] + ": " + trimestre4[i]);
  }
}

let cantidad: number = Number(prompt("Ingrese la Cantidad de Alumnos: "));
let arreglo_nombres: string[] = new Array(cantidad);
let arreglo_Trim1: number[] = new Array(cantidad);
let arreglo_Trim2: number[] = new Array(cantidad);
let arreglo_Trim3: number[] = new Array(cantidad);
let arregloPromedio_Anual: number[] = new Array(cantidad);

cargoArregloNombres(arreglo_nombres);
cargarArregloTrimestre(arreglo_Trim1, arreglo_nombres);
cargarArregloTrimestre(arreglo_Trim2, arreglo_nombres);
cargarArregloTrimestre(arreglo_Trim3, arreglo_nombres);
cargarYObtenerPromedio(
  arreglo_Trim1,
  arreglo_Trim2,
  arreglo_Trim3,
  arregloPromedio_Anual,
  arreglo_nombres
);

/*for (let i: number = 0; i < arreglo_nombres.length; i++) {  //cargo arreglo de nombres 
  arreglo_nombres[i] = prompt("Ingrese Alumno " + (i + 1) + ": ");
}*/

/*for (let i: number = 0; i < arreglo_Trim1.length; i++) {  //cargo arreglo trimestre 1
  arreglo_Trim1[i] = Number(prompt("Alumno " + (i + 1) + " PRIMER Nota: "));
}

for (let i: number = 0; i < arreglo_Trim1.length; i++) {   //cargo arreglod trimestre 2
  arreglo_Trim2[i] = Number(prompt("Alumno " + (i + 1) + " SEGUNDA Nota: "));
}

for (let i: number = 0; i < arreglo_Trim1.length; i++) {  //cargo arreglo trimestre 3
  arreglo_Trim3[i] = Number(prompt("Alumno " + (i + 1) + " TERCER Nota: "));
}*/

//PROMEDIO:
/*for (let i: number = 0; i < arregloPromedio_Anual.length; i++) {  //cargo arreglo Promedio
  arregloPromedio_Anual[i] =(arreglo_Trim1[i] + arreglo_Trim2[i] + arreglo_Trim3[i]) / 3;
}

for (let i: number = 0; i < arregloPromedio_Anual.length; i++) {    //Imprimo el Promedio
  console.log(arreglo_nombres[i] + ": " + arregloPromedio_Anual[i]);
}*/
