/*• Almacene en un arreglo de dimensión N números (la cantidad es ingresada por el usuario)
• Muestre cuántos números son positivos, cuántos son negativos y cuántos ceros hay
Ejemplo:
v = 0, -7, -9, 1, 0, 0
La salida es: 1 positivos, 2 negativos y 3 ceros */
let cantidad_Numeros: number = Number(prompt("Ingrese Cantidad de Numeros: "));
let arreglo_Numeros: number[] = new Array(cantidad_Numeros);
let indice: number;
let contador_Positivos: number = 0;
let contador_Negativos: number = 0;
let contador_Ceros: number = 0;

for (indice = 0; indice < cantidad_Numeros; indice++) {
  //Carga da Datos.
  arreglo_Numeros[indice] = Number(
    prompt("Ingrese Numero " + (indice + 1) + ": ")
  );
  if (arreglo_Numeros[indice] > 0) {
    contador_Positivos = contador_Positivos + 1;
  } else if (arreglo_Numeros[indice] < 0) {
    contador_Negativos = contador_Negativos + 1;
  } else {
    contador_Ceros = contador_Ceros + 1;
  }
}

for (indice = 0; indice < cantidad_Numeros; indice++) {
  //Muestro los Datos.
  console.log(arreglo_Numeros[indice]);
}
console.log(
  "Positivos: " +
    contador_Positivos +
    " / Negativos: " +
    contador_Negativos +
    " / Ceros: " +
    contador_Ceros
);
