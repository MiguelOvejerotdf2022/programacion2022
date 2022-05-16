/*Implemente un método llamado calcularResultado que
reciba por parámetros los dos números y la opción y
retorne el resultado de la operación.
VERSION 2 MAS SIMPLIFICADA Y CON 2 RETURN.*/

function calcularResultado(num1: number, num2: number, opcion: number): number {
  if (opcion === 1) {
    return num1 + num2; // SIEMPRE RETORNA LA SUMA CUANDO LA OPCION ES 1.
  }
  return num1 - num2; // SIEMPRE RETORNA LA RESTA CUANDO NO ENTRA EN EL IF.
}

let num1: number = 5;
let num2: number = 2;
let opcion: number = 45; //Juego con los valores cambiando este dato manualmente.

console.log(calcularResultado(num1, num2, opcion));
/*En este caso solo necesito motrar el valor que se retorno y no es 
necesario guardarlo en una variable.*/
