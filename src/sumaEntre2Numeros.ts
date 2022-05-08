/*• Escriba un programa que pida al usuario dos números
enteros, y luego retorne la suma de todos los números
que están entre ellos
• Por ejemplo, si los números son 2 y 7, debe entregar
como resultado 2 + 3 + 4 + 5 + 6 + 7 = 27*/

let num1: number = Number(prompt("Ingrese el primer Numero"));
let num2: number = Number(prompt("Ingrese el segundo Numero"));
let i: number;
let suma: number = 0;

if (num1 < num2) {
  for (i = num1; i <= num2; i++) {
    suma = suma + i;
    console.log(i);
  }
  console.log("La Suma es: ", suma);
} else {
  for (i = num1; i >= num2; i--) {
    suma = suma + i;
    console.log(i);
  }
  console.log("La suma es: ", suma);
}
