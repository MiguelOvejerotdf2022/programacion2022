let num: number = Number(prompt("Ingrese un Numero: "));
let contadorP: number = 0;
let contador: number = 0;
let porcentajeP: number;

while (num !== 0) {
  if (num > 0) {
    contadorP = contadorP + 1;
  }
  console.log(num);
  num = Number(prompt("Ingrese un Numero: "));
  contador = contador + 1;
  porcentajeP = (100 / contador) * contadorP;
}
console.log("Cantidad de Numeros: ", contador);
console.log("Cantidad de Numeros Positivos: ", contadorP);
console.log("PORCENTAJE DE POSITIVOS RESPECTO DEL TOTAL: ", porcentajeP, "%");
