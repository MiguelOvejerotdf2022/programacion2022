/*• Sumar los elementos de cada una de las posiciones de dos arreglos
y guardar el resultado en otro arreglo
• El arreglo tiene dimensión 6 y los números de los dos vectores
los carga el usuario*/
let dimension: number = Number(prompt("DIMENSION de los vectores: "));
let arreglo1: number[] = new Array(dimension);
let arreglo2: number[] = new Array(dimension);
let arregloSuma: number[] = new Array(dimension);

for (let indice: number = 0; indice < dimension; indice++) {
  arreglo1[indice] = Number(prompt("VECTOR 1 - Posicion " + (indice + 1)));
  arreglo2[indice] = Number(prompt("VECTOR 2 - Posicion " + (indice + 1)));
  arregloSuma[indice] = arreglo1[indice] + arreglo2[indice];
}

for (let indice: number = 0; indice < dimension; indice++) {
  console.log(
    "[ VECTOR 1 ] posicion " + (indice + 1) + " = " + arreglo1[indice]
  );
  console.log(
    "[ VECTOR 2 ] posicion " + (indice + 1) + " = " + arreglo2[indice]
  );
  console.log(
    "[ VECTO SUMA ] posicion " + (indice + 1) + " --> " + arregloSuma[indice]
  );
}
