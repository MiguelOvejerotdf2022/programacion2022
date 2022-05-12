/*Realice un programa que devuelva la potencia de un número. 
La base y el exponente deben ser ingresados por teclado. 
Sólo deben admitirse exponentes mayores o iguales a cero. 
Recuerde que el resultado de un numero elevado a 0 es 1.
Separe la lógica de calcular la potencia utilizando métodos.*/
let base: number = Number(prompt("Ingrese la BASE: "));
let exponente: number = Number(prompt("Ingrese el EXPONENTE: "));
let basexExponente: number = 0;

while (exponente < 0) {
  exponente = Number(prompt("Ingrese un exponente MAYOR O IGUAL A 0: "));
}
if (exponente === 0) {
  basexExponente = 0;
}
basexExponente = base ^ exponente;
console.log("El resultado es: ", basexExponente);
