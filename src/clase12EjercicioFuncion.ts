/*Crear un programa con una funcion que reciba por parametro su nombre 
y apellido y lo imprima por consola.*/

function nombreYApellido(nombre: string, apellido: string): void {
  console.log("Nombre y Apellido: " + nombre + " " + apellido);
}

let nombre: string = prompt("Ingrese su Nombre: ");
let apellido: string = prompt("Ingrese su Apellido: ");
nombreYApellido(nombre, apellido);
