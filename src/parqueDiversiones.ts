/*Desarrolle un algoritmo que de acuerdo a la altura de una
persona, decida si puede entrar a un juego en un parque
de diversiones, Para poder subirse a la montaña rusa
la persona debe medir 1.30 mts. o más*/

let altura: number = Number(prompt("Ingrese la ALTURA"));
if (altura >= 1.3) {
  console.log("Puede subir al Juego");
} else {
  console.log("No puede subir al Juego");
}
