/*Implemente un método llamado calcularResultado que
reciba por parámetros los dos números y la opción y
retorne el resultado de la operación*/

//Declaro mi funcion CON 2 NUMEROS Y LA OPCION COMO PARAMETROS
function calcularResultado(num1: number, num2: number, opcion: number): number {
  let resultado: number = 0;
  if (opcion === 1) {
    resultado = num1 + num2;
  } else if (opcion === 2) {
    resultado = num1 - num2;
  }
  return resultado; //Retorna el RESULTADO DE LAS OPERACIONES DE LA FUNCION.
}

let num1: number = Number(prompt("Ingrese el PRIMER numero: "));
let num2: number = Number(prompt("Ingrese el SEGUNDO numero: "));
let opcion: number = Number(prompt("Elija una OPCION: 1-SUMA 2-RESTA"));
/*let mostrarResultadoConVariable:number = 0; 
mostrarResultadoConVariable = calcularResultado(num1, num2, opcion);
console.log(mostrarResultadoConVariable);

Otra opcion de RETORNAR EL RESULTADO EN UNA VARIABLE; Guardo el resultado
de lo que va a retornar en una variable para luego mostrarlo o imprimirlo
en LA CONSOLA.*/

console.log(calcularResultado(num1, num2, opcion));
