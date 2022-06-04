/*El jardín infantil necesita un programa para poder asignar cursos a las aulas.
Se cuentan con tres aulas: Azul, Verde y Amarilla. Cada aula cuenta con una capacidad diferente
(es decir, un número de bancos). 
La aula Azul tiene 40 bancos, la Verde 35 y la Amarilla 30.
Dado un número de infantes ingresado por el usuario, el programa deberá determinar el
aula que minimice la cantidad de bancos vacíos.
La salida del algoritmo es el color que identifica al aula asignada.
Ejemplo: si la cantidad de personas de un curso es 34, entonces el aula a asignar será la Verde.
El aula Amarilla no puede ser asignada porque la cantidad de personas es menor a la cantidad
de bancos disponibles. El aula Azul es descartada porque quedan más bancos inutilizados que en
el aula Verde (6 versus 1).*/

function aulaAsignada(cantidadNinos: number): string {
  let aulaAzul: number = 40;
  let aulaVerde: number = 35;
  let aulaAmarilla: number = 30;

  if (cantidadNinos <= aulaAmarilla && cantidadNinos > 0) {
    return "AMARILLA";
  } else if (cantidadNinos <= aulaVerde && cantidadNinos >= 31) {
    return "VERDE";
  } else if (cantidadNinos <= aulaAzul && cantidadNinos >= 36) {
    return "AZUL";
  } else {
    return "NINGUNA, CAPACIDAD EXCEDIDA";
  }
}

let cantidadDeInfantes: number = Number(
  prompt("Ingrese la cantidad de Infantes: ")
);

while (cantidadDeInfantes < 1) {
  cantidadDeInfantes = Number(
    prompt("Ingrese la cantidad de Infantes CORRECTAMENTE: ")
  );
}

console.log("Aula asingnada: " + aulaAsignada(cantidadDeInfantes));

/*function aulaAsignada():void{   //OTRO METODO

let aulaAzul:number = 40;
let aulaVerde:number = 35;
let aulaAmarilla:number = 30;
let cantidadDeInfantes:number = Number(prompt("Ingrese la cantidad de Infantes: "));

if(cantidadDeInfantes<=aulaAmarilla && cantidadDeInfantes>0){
    console.log("El AulA asignada es la AMARILLA");
  }else if(cantidadDeInfantes<=aulaVerde && cantidadDeInfantes>=31){
    console.log("El AulA asignada es la VERDE");
  }else if(cantidadDeInfantes<=aulaAzul && cantidadDeInfantes>=36){
    console.log("El AulA asignada es la AZUL");
  }else{
    console.log("CAPACIDAD EXCEDIDA, NO HAY DISPONIBILIDAD");
  }
}

aulaAsignada();*/
