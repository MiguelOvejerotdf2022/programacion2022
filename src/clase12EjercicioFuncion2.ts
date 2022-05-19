/*crear una funcion que reciba un valor numerico y
devuelva true si es par o false si es impar (con retorno)*/

function parImpar(num3: number): boolean {
  if (num3 % 2 === 0) {
    console.log("El numero ingresado es PAR");
    return true;
  } else {
    console.log("El numero ingresado es IMPAR");
    return false;
  }
}

let num3: number = Number(prompt("Ingrese un Numero: "));
let resultado3: boolean = parImpar(num3);

console.log(resultado3);
