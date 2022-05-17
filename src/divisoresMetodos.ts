/*• Implemente un método llamado cantidadDeDivisores que
reciba un número entero y devuelva la cantidad de divisores
• Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8,
16, por lo que la respuesta debería ser 5
• Re-utilice el método esMultiplo implementado para el ejercicio
anterior*/

function cantidadDeDivisores(numero: number) {
  let contador: number = 0;
  for (let indice: number = 1; indice <= numero; indice++) {
    if (numero % indice === 0) {
      contador = contador + 1;
      console.log(indice);
    }
  }
  return contador;
}

let numero: number = Number(prompt("Ingrese un Numero: "));

console.log(
  numero + " --> Cantidad de DIVISORES: " + cantidadDeDivisores(numero)
);
