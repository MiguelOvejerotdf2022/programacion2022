/*• Realice un programa que devuelva el área del
triangulo usando los siguientes pares de base-altura:
• (1,2) (2,4) (3,6) (4,8) (5, 10) (6,12) (7,14)
• Implemente un método llamado calcularAreaTriangulo
que reciba dos números por parámetro (uno llamado
base y otro altura)*/

function calcularAreaTriangulo(base: number, altura: number): number {
  let area: number = 0;
  area = (base * altura) / 2;
  return area;
}

let base: number = Number(prompt("Ingrese la BASE DEL TRIANGULO: "));
let altura: number = Number(prompt("Ingrese la ALTURA DEL TRIANGULO: "));

console.log("El AREA DEL TRIANGULO ES: " + calcularAreaTriangulo(base, altura));
