/*Leer valores hasta que se introduzca un cero (0)
• El usuario puede introducir valores positivos y negativos
• Encontrar el máximo de los elementos que se introdujeron
• Analizar cómo cambia el programa para hallar el mínimo*/
let num: number;
let max: number = -99999;
let min: number = 99999;
while (num !== 0) {
  if (num > max) {
    max = num;
  }
  if (num < min) {
    min = num;
  }
  console.log(num);
  num = Number(prompt("Ingrese un Numero: "));
}
console.log("El MAXIMO ELEMENTO ENCONTRADO ES EL: " + max);
console.log("El MINIMO ELEMENTO ENCONTRADO ES EL: " + min);
