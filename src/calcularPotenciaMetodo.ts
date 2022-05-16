/*• Realice un programa que devuelva la potencia de un número.
• La base y el exponente deben ser ingresados por teclado.
• Sólo deben admitirse exponentes mayores o iguales a cero.
• Recuerde que el resultado de un numero elevado a 0 es 1.
• Separe la lógica de calcular la potencia utilizando métodos.*/

let base: number = Number(prompt("Ingrese la BASE: "));
let exponente: number = Number(prompt("Ingrese el EXPONENTE: "));

function calcularPotencia(base: number, exponente: number): number {
  let resultado: number = 1;
  for (let indice: number = 1; indice <= exponente; indice++) {
    resultado = base * resultado;
  }
  return resultado;
}

console.log(calcularPotencia(base, exponente));
