/*• Llenar un array de 10 posiciones con números aleatorios entre 0 y 99
• Para obtener números aleatorios crear una función Azar,
que se base en las funciones disponibles en el paquete Math:
-Math.random() devuelve un nro al azar entre 0 y 1.*/
function azar(): number {
  return Math.floor(Math.random() * 100);
}

let array10: number[] = new Array(10);
let indice: number = 0;

for (indice = 0; indice < 10; indice++) {
  array10[indice] = azar();
}

for (indice = 0; indice < 10; indice++) {
  console.log("POSICION " + (indice + 1) + " ---> " + array10[indice]);
}
