/*• Sumar los elementos de cada una de las posiciones de dos arreglos
y guardar el resultado en otro arreglo
• El arreglo tiene dimensión 6 y los números de los dos vectores
los carga el usuario*/

function cargarVector(parametro: number[]): void {
  for (let indice: number = 0; indice < parametro.length; indice++) {
    parametro[indice] = Number(prompt("Posicion " + (indice + 1)));
  }
}

function sumarVectores(
  vector1: number[],
  vector2: number[],
  vectorsuma: number[]
): void {
  for (let indice: number = 0; indice < vector1.length; indice++) {
    vectorsuma[indice] = vector1[indice] + vector2[indice];
  }
}

function MostrarSuma(muestroSuma: number[]): void {
  for (let indice: number = 0; indice < muestroSuma.length; indice++) {
    console.log(muestroSuma[indice]);
  }
}

let dimension: number = Number(prompt("DIMENSION de los vectores: "));
let arreglo1: number[] = new Array(dimension);
let arreglo2: number[] = new Array(dimension);
let arregloSuma: number[] = new Array(dimension);

/*for (let indice: number = 0; indice < dimension; indice++) {  //Cargo datos Vector 1, 2 y Vector Suma.
  arreglo1[indice] = Number(prompt("VECTOR 1 - Posicion " + (indice + 1)));
  arreglo2[indice] = Number(prompt("VECTOR 2 - Posicion " + (indice + 1)));
  arregloSuma[indice] = arreglo1[indice] + arreglo2[indice];
}*/

cargarVector(arreglo1);
cargarVector(arreglo2);
sumarVectores(arreglo1, arreglo2, arregloSuma);
MostrarSuma(arregloSuma);

/*for (let indice: number = 0; indice < dimension; indice++) {
  //Muestro Datos cargados.
  console.log(
    "[ VECTOR 1 ] posicion " + (indice + 1) + " = " + arreglo1[indice]
  );
  console.log(
    "[ VECTOR 2 ] posicion " + (indice + 1) + " = " + arreglo2[indice]
  );
  console.log(
    "[ VECTOR SUMA ] posicion " + (indice + 1) + " --> " + arregloSuma[indice]
  );
}*/
