/*Desarrolle un algoritmo que, dada una posición
en una carrera se determine el tipo de medalla a entregar.
Tenga en cuenta que para el primer puesto se entrega medalla
de oro, segundo puesto medalla de plata y tercer puesto
medalla de bronce. En caso que quede en otra posición
se entrega certificado de participación.*/

let competidor: string = prompt("Ingrese el nombre del competidor");
let puesto: number = Number(prompt("Ahora ingrese el PUESTO DE CLASIFICACION"));

if (puesto === 1) {
  console.log("Medalla de ORO para", competidor);
} else {
  if (puesto === 2) {
    console.log("Medalla de PLATA para", competidor);
  } else {
    if (puesto === 3) {
      console.log("Medalla de BRONCE para", competidor);
    } else {
      if (puesto >= 4) {
        console.log("CERTIFICADO DE PARTICIPACION para", competidor);
      } else {
        console.log("ERROR!! INGRESO UN DATO INVALIDO");
      }
    }
  }
}
