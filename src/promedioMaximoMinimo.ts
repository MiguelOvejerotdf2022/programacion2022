/*• Diseñar un algoritmo que lea números enteros hasta teclear 0.
• Determinar y mostrar el máximo, el mínimo y la media de todos los
números ingresados
• Pensar cuidadosamente cómo debemos inicializar.
las variables*/
let num: number = Number(prompt("Ingrese un Numero"));
let max: number = -99999;
let min: number = 99999;
let sumador: number = 0;
let contador: number = 0;
let promedio: number = 0;

while (num !== 0) {
  if (num > max) {
    max = num;
  }
  if (num < min) {
    min = num;
  }
  contador = contador + 1;
  sumador = sumador + num;
  promedio = sumador / contador;
  console.log(num);
  num = Number(prompt("Ingrese otro Numero: "));
}
console.log("El MAXIMO ELEMENTO ENCONTRADO ES EL: ", max);
console.log("El MINIMO ELEMENTO ENCONTRADO ES EL: ", min);
console.log("PROMEDIO NUMEROS INGRESADOS: ", promedio);
