/*• Sumar los elementos de cada una de las posiciones de dos vectores y guardar el resultado
en otro vector 
• El arreglo tiene dimensión 6 y los números de los dos vectores los carga el usuario
Ejemplo:
v1 = 1, 3, 7, 9, 9, 5
v2 = 6, 9, 2, 5, 9, 4
vSuma = 7, 12, 9, 14, 18, 9 */

function cargarArreglo(arreglo_Parametro: number[]): void {
  for (let indice: number = 0; indice < arreglo_Parametro.length; indice++) {
    arreglo_Parametro[indice] = Number(
      prompt("[ARRAY] - Ingrese elemento " + (indice + 1) + ": ")
    );
  }
}

function sumar_Vectores(
  arreglo1: number[],
  arreglo2: number[],
  arreglo3: number[]
): number {
  let indice: number = 0;
  for (let indice: number = 0; indice < arreglo1.length; indice++) {
    arreglo3[indice] = arreglo1[indice] + arreglo2[indice];
  }
  return arreglo3[indice];
}

/*function mostrar_Suma(suma_Parametro:number[]):void{
  for(let indice:number = 0;indice<suma_Parametro.length;indice++){
    console.log(suma_Parametro[indice]);
  }
}*/

let arreglo_1: number[] = new Array(3); //Declaro mis arreglos y les doy Dimension.
let arreglo_2: number[] = new Array(3);
let arreglo_Suma: number[] = new Array(3);
let mostrar_Suma: number = sumar_Vectores(arreglo_1, arreglo_2, arreglo_Suma);

cargarArreglo(arreglo_1); //Funcion que carga Primer Arreglo.
cargarArreglo(arreglo_2); //Funcion que carga Primer Arreglo.
console.log(mostrar_Suma); //Muestro la Funcion que retorna la SUMA de los arreglos que guarde previamente en una variable.

/* Cargo Arreglo 1.
for (let indice: number = 0; indice < arreglo_1.length; indice++) {
  arreglo_1[indice] = Number(prompt("[ARRAY 1] - Ingrese elemento "+ (indice + 1)+": "));
}*/

/* Cargo Arreglo 2.
for (let indice: number = 0; indice < arreglo_1.length; indice++) {
  arreglo_2[indice] = Number(prompt("[ARRAY 2] - Ingrese elemento "+ (indice + 1)+": "));
}*/

/* Cargo la Suma de los 2 Arreglos anteriores en un TERCER ARREGLO.
for (let indice: number = 0; indice < arreglo_2.length; indice++) {
  arreglo_Suma[indice] = arreglo_1[indice] + arreglo_2[indice];
}*/

/*for (let indice: number = 0; indice < arreglo_2.length; indice++) { //Muestro la SUMA.
  console.log(arreglo_Suma[indice]);
}*/
