/*• Cree un método esMultiplo con 2 parámetros que devuelva el
valor lógico verdadero o falso según si el primer número que
se indique como parámetro es múltiplo del segundo
• Recuerde que un numero es múltiplo de otro si al dividirlo su
resto es cero
• Recuerde que la operación mod permite saber si el resto de
una división es cero*/

/*function esMultiplo(num1: number, num2: number): boolean {
  if (num1 % num2 === 0) {
    console.log(num1 + " es multiplo de " + num2);
    return true;
  } else {
    console.log(num1 + " NO es multiplo de " + num2);
    return false;
  }
}

let num1: number = Number(prompt("Ingrese el Primer Numero: "));
let num2: number = Number(prompt("Ingrese el Segundo Numero: "));

console.log(esMultiplo(num1, num2));*/

function esMultiplo(dividendo: number, divisor: number): boolean {
  if (dividendo % divisor === 0) {
    return true;
  } else {
    return false;
  }
}

let numero1: number = Number(prompt("ingrese numero 1"));
let numero2: number = Number(prompt("ingrese numero 2"));

let multiplo: boolean = esMultiplo(numero1, numero2);

if (multiplo === true) {
  console.log("el numero " + numero1 + " es multiplo de " + numero2);
} else {
  console.log("el numero " + numero1 + " no es multiplo de " + numero2);
}
