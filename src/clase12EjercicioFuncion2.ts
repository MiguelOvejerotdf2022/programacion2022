/*crear una funcion que reciba un valor numerico y
devuelva true si es par o false si es impar (con retorno)*/

function parImpar(num: number): boolean {
  if (num % 2 === 0) {
    console.log("El numero ingresado es PAR");
    return true;
  } else {
    console.log("El numero ingresado es IMPAR");
    return false;
  }
}

let num: number = Number(prompt("Ingrese un Numero: "));
let resultado: boolean = parImpar(num);

console.log(resultado);
