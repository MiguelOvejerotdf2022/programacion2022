/*• Construya un algoritmo que sume todos los elementos de un
arreglo de tamaño N 
• La dimensión del arreglo es ingresada por el usuario
• Los elementos (números) del arreglo son ingresados por el usuario*/
let dimension: number = Number(prompt("Ingrese la DIMENSION del arreglo: "));
let arregloSumar: number[] = new Array(dimension);
let sumar_Elementos: number = 0;
for (let indice: number = 0; indice < dimension; indice++) {
  arregloSumar[indice] = Number(
    prompt("Ingrese el " + (indice + 1) + "° ELEMENTO: ")
  );
  sumar_Elementos = sumar_Elementos + arregloSumar[indice];
}
console.log("La SUMA de los elementos cargados es " + sumar_Elementos);
