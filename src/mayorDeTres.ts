/* Desarrolle un algoritmo que dados
tres números determine cuál es el mayor de los tres
con else if */
let n1: number = Number(prompt("Ingrese un Numero"));
let n2: number = Number(prompt("Ingrese el segundo Numero"));
let n3: number = Number(prompt("Ingrese el tercer Numero"));

console.log(n1, "", n2, "", n3);
if (n1 > n2 && n1 > n3) {
  console.log("El Mayor es: ", n1);
} else if (n2 > n3) {
  console.log("EL MAYOR ES: ", n2);
} else if (n3 > n2) {
  console.log("EL MAYOR ES: ", n3);
}
