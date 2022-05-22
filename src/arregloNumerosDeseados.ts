/*• Construya un algoritmo que tenga un arreglo de dimensión 5 
y llénelo con los números que el usuario desee
• Muestre los números del arreglo al usuario*/
let arregloDimension5: number[] = new Array(5);

for (let indice: number = 0; indice < 5; indice++) {
  arregloDimension5[indice] = Number(
    prompt("Ingrese un Numero en la posicion " + (indice + 1))
  );
}

for (let indice: number = 0; indice < 5; indice++) {
  console.log(
    "Posicion " + (indice + 1) + " ----> " + arregloDimension5[indice]
  );
}
