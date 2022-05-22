/*Construya un algoritmo que tenga un arreglo de dimensión deseada
por el usuario y llénelo con los nombres que el usuario desee
• Crear un arreglo de las posiciones que desee el usuario y llenarlo 
con nombres de personas*/
let longitudArreglo: number = Number(
  prompt("Ingrese el tamaño de LONGITUD del arreglo: ")
);
let nombres: string[] = new Array(longitudArreglo);
let indice: number;
for (indice = 0; indice < longitudArreglo; indice++) {
  nombres[indice] = prompt("Ingrese Nombre y Apellido: ");
}

for (indice = 0; indice < longitudArreglo; indice++) {
  console.log(indice + 1 + " ---> " + nombres[indice]);
}
