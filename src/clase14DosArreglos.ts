/*• Construya un algoritmo que tenga dos arreglos uno que almacene
2 nombres y otro que almacene 3 números ambos ingresados por el usuario.
• Al final debe imprimir los valores por consola.*/

let cargarNombres: string[] = new Array(2);
let cargarNumeros: number[] = new Array(3);

for (let indice: number = 0; indice < 2; indice++) {
  cargarNombres[indice] = prompt("Ingrese Nombre y Apellido: ");
}
for (let indice: number = 0; indice < 3; indice++) {
  cargarNumeros[indice] = Number(prompt("Inrese Numero: "));
}

for (let indice: number = 0; indice < 2; indice++) {
  console.log(indice + 1 + " ---> " + cargarNombres[indice]);
}
for (let indice: number = 0; indice < 3; indice++) {
  console.log(indice + 1 + " ---> " + cargarNumeros[indice]);
}
