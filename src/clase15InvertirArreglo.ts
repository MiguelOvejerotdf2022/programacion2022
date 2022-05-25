/*• Almacene en un arreglo de tamaño N los números ingresados por el usuario
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del último al primero
Ejemplo:
v = 1, 3, 7, 9, 9, 5
La salida es: 5, 9, 9, 7, 3, 1*/

let longitud: number = Number(prompt("Ingrese Dimension del Arreglo: ")); //Declaro variable y se pide al usuario la cantidad de elementos que va a contener el arreglo.
let arregloInvertido: number[] = new Array(longitud); //Declaro el arreglo y le asigno la dimension de elementos.

for (let indice: number = 0; indice < longitud; indice++) {
  //Cargo el Arreglo.
  arregloInvertido[indice] = Number(
    prompt("Posicion " + (indice + 1) + " Ingrese elemento: ")
  );
}

for (let indice: number = 0; indice < longitud; indice++) {
  //Imprimo el arreglo antes de invertirlo para comprobar.
  console.log("Posicion " + (indice + 1) + " -> " + arregloInvertido[indice]);
}

console.log("ARREGLO INVERTIDO ----");
for (let indice: number = longitud - 1; indice >= 0; indice--) {
  //Invierto el Arreglo.
  console.log("Posicion " + (indice + 1) + " -> " + arregloInvertido[indice]);
}
