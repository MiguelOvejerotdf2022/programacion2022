/*Desarrolle un algoritmo que permita cargar alumnos y sus notas en los
tres trimestres.
Se debe permitir obtener el promedio anual (es decir, de sus tres notas)
de un alumno (ingresado por el usuario)
Luego de resolverlo, pensar en aprovechar métodos y discutir como representar
la información. */

function cargarVectorNombres(parametroNombres: string[]): void {
  for (let indice: number = 0; indice < parametroNombres.length; indice++) {
    parametroNombres[indice] = prompt(
      "Ingrese Nombre del Alumno " + (indice + 1) + ": "
    );
  }
}

function cargarVectorNotas(
  nota1: number[],
  nota2: number[],
  nota3: number[]
): void {
  for (let indice: number = 0; indice < nota1.length; indice++) {
    nota1[indice] = Number(prompt("Ingrese 1° Nota: "));
    nota2[indice] = Number(prompt("Ingrese 2° Nota: "));
    nota3[indice] = Number(prompt("Ingrese 3° Nota: "));
  }
}

/*function cargaDeDatos(arregloNom:string[],arregloTri1:number[],arregloTri2:number[],arregloTri3:number[]):void{
  for (let indice:number = 0; indice < arregloNom.length; indice++) {
    arregloNom[indice] = prompt("Ingrese Nombre del Alumno " + (indice+1)+ ": ");
    arregloTri1[indice] = Number(prompt("Ingrese 1° Nota: "));
    arregloTri2[indice] = Number(prompt("Ingrese 2° Nota: "));
    arregloTri3[indice] = Number(prompt("Ingrese 3° Nota: "));
  }
}*/

function cargarYMostrarPromedio(
  arregloTri1: number[],
  arregloTri2: number[],
  arregloTri3: number[],
  arregloProm: number[],
  arregloNom: string[]
): void {
  for (let indice: number = 0; indice < arregloTri1.length; indice++) {
    arregloProm[indice] =
      (arregloTri1[indice] + arregloTri2[indice] + arregloTri3[indice]) / 3;
    console.log(
      arregloNom[indice] +
        ":  [ " +
        arregloTri1[indice] +
        "  " +
        arregloTri2[indice] +
        "  " +
        arregloTri3[indice] +
        " ] = " +
        arregloProm[indice]
    );
  }
}

let longitud_Arreglo: number = Number(prompt("Ingrese cantidad de Alumnos: "));
let arreglo_Nombres: string[] = new Array(longitud_Arreglo);
let arreglo_Trimestre1: number[] = new Array(longitud_Arreglo);
let arreglo_Trimestre2: number[] = new Array(longitud_Arreglo);
let arreglo_Trimestre3: number[] = new Array(longitud_Arreglo);
let arreglo_Promedio: number[] = new Array(longitud_Arreglo);
let buscarAlumno: string;

cargarVectorNombres(arreglo_Nombres);
cargarVectorNotas(arreglo_Trimestre1, arreglo_Trimestre2, arreglo_Trimestre3);

//cargaDeDatos(arreglo_Nombres,arreglo_Trimestre1,arreglo_Trimestre2,arreglo_Trimestre3);
console.log("** ALUMNOS -- NOTAS -- PROMEDIO FINAL **");
cargarYMostrarPromedio(
  arreglo_Trimestre1,
  arreglo_Trimestre2,
  arreglo_Trimestre3,
  arreglo_Promedio,
  arreglo_Nombres
);

buscarAlumno = prompt("Ingrese el Nombre del Alumno a buscar: ");

for (let indice: number = 0; indice < arreglo_Nombres.length && arreglo_Nombres[indice] !== buscarAlumno;indice++);
if (indice === arreglo_Nombres.length) {
  console.log("NO se encontro el Alumno que buscaba");
} else {
  console.log("Se encontro el Alumno que buscaba: " +arreglo_Nombres[indice] +" con PROMEDIO de " +arreglo_Promedio[indice]);
}
