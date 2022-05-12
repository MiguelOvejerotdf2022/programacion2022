/*• Realice una calculadora que suma o resta
según el pedido del usuario.
• El usuario deberá ingresar 2 números por teclado
• Luego ingresará una opción:
• Si ingresa 1 los números se sumaran
• Si ingresa 2 los números se restaran
• Si ingresa cualquier otra tecla termina el programa
• Para informar el resultado de la operación debe usar el
siguiente formato (40 ‘-’):
6
----------------------------------------
El resultado de la operación es: X
----------------------------------------*/

function DibujarLinea() {
  let linea: string = "-";
  for (let indice: number = 0; indice <= 40; indice++) {
    linea = linea + "-";
  }
  console.log(linea);
}
let numero1: number = Number(prompt("Ingrese el PRIMER numero: "));
let numero2: number = Number(prompt("Ingrese el SEGUNDO numero: "));
let resultado: number = 0;
let opcion: number;

opcion = Number(
  prompt(
    "Ingrese una opcion, 1 para SUMAR, 2 para RESTAR o cualquier otra teclar para FINALIZAR; "
  )
);
if (opcion === 1) {
  resultado = numero1 + numero2;
  DibujarLinea();
  console.log("LA SUMA ES: " + resultado);
  DibujarLinea();
} else if (opcion === 2) {
  resultado = numero1 - numero2;
  DibujarLinea();
  console.log("LA RESTA ES: " + resultado);
  DibujarLinea();
} else {
  console.log("EL PROGRAMA HA FINALIZADO");
}
