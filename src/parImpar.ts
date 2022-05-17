/*Desarrollar un algoritmo que dado un número,
ingresado por el usuario determine si el número es par
o impar y le informe al usuario.
En el caso de ser 0 (cero) el algoritmo deberá  informarlo 
con switch */
let num: number = Number(prompt("Ingrese un Numero: "));

while (num === 0) {
  num = Number(prompt("Vuelva a REINGRESAR( Numero MAYOR a 0 ): "));
}
if (num % 2 === 0) {
  console.log("El Numero ingresado es PAR");
} else if (num % 2 !== 0) {
  console.log("El Numero ingresado es IMPAR");
}
