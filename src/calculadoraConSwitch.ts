/*Realizar el ejercicio de la calculadora con 4 operaciones
(suma, resta, multiplicacion y division) utilizando Switch 
y la funcion dibujarLineas que veniamos usando*/
function dibujarLinea(cantidadDeGuiones: number) {
  let linea: string = "-";
  for (let indice: number = 1; indice < cantidadDeGuiones; indice++) {
    linea = linea + "-";
  }
  console.log(linea);
}
let num1: number = Number(prompt("Ingrese el PRIMER numero: "));
let num2: number = Number(prompt("Ingrese el SEGUNDO numero: "));
let resultado: number = 0;
let opcion: number = Number(
  prompt("Elija una opcion: 1-Suma; 2-Resta; 3-Multiplicacion; 4-Division")
);

switch (opcion) {
  case 1:
    resultado = num1 + num2;
    dibujarLinea(20);
    console.log("La SUMA es: " + resultado);
    dibujarLinea(20);
    break;

  case 2:
    resultado = num1 - num2;
    dibujarLinea(20);
    console.log("La RESTA es: " + resultado);
    dibujarLinea(20);
    break;

  case 3:
    resultado = num1 * num2;
    dibujarLinea(20);
    console.log("La MULTIPLICACION ES: " + resultado);
    dibujarLinea(20);
    break;

  case 4:
    while (num2 === 0) {
      num2 = Number(
        prompt("No existe la Division por 0, Vuelva A REINGRESAR: ")
      );
    }
    resultado = num1 / num2;
    dibujarLinea(20);
    console.log("La DIVISION ES: " + resultado);
    dibujarLinea(20);
    break;

  default:
    console.log("FIN DEL PROGRAMA");
    break;
}
