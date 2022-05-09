let numero: number = Number(prompt("Ingrese un Numero:(con 0 corta la carga)"));
let contadorP: number = 0;
let contador: number = 0;
let porcentajeP: number;

while (numero !== 0) {
  if (numero > 0) {
    contadorP = contadorP + 1;
  }
  console.log(numero);
  numero = Number(prompt("Ingrese otro Numero: "));
  contador = contador + 1;
  porcentajeP = (100 / contador) * contadorP;
}
console.log("Cantidad de Numeros ingresados: ", contador);
console.log("Cantidad de Numeros Positivos: ", contadorP);
console.log("PORCENTAJE DE POSITIVOS RESPECTO DEL TOTAL: ", porcentajeP, "%");
