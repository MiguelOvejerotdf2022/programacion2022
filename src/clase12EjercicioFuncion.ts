/*Crear un programa con una funcion que reciba por parametro su nombre 
y apellido y lo imprima por consola.*/

function nombreYApellido(nombre: string, apellido: string): string {
  let concatenacion: string = nombre + " " + apellido;
  return concatenacion;
}

let nombre: string = "Miguel Orlando";
let apellido: string = "Ovejero Alvarez";
let resultado2: string = nombreYApellido(nombre, apellido);

console.log("Nombre y Apellido: " + resultado2);
