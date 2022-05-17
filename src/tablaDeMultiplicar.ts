/*• Diseñar un algoritmo que muestre por pantalla la tabla de
multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de
multiplicación, el usuario también deberá ingresar dicho valor*/
let numero1: number = Number(prompt("Ingrese un numero: "));
let numero2: number = Number(prompt("Ingrese hasta que numero: "));

for (let indice: number = 0; indice <= numero2; indice++) {
  console.log(numero1 + " x " + indice + ": " + numero1 * indice);
}
