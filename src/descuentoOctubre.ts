/* Una tienda al cumplir años en Octubre ofrece
un descuento del 15% a sus clientes en todas
sus compras
• Desarrolle un algoritmo que dada una compra:
precio unitario, cantidad y el mes, indicados
por el usuario, determine si el cliente tiene
descuento o no */
let articulo: string = prompt("Ingrese el ARTICULO");
let precio: number = Number(prompt("Ingrese el PRECIO"));
let cant: number = Number(prompt("Ingrese la CANTIDAD"));
let mes: string = prompt("Ingrese el MES");
let precioxcant: number = precio * cant;
let descuento: number = precioxcant - precioxcant * 0.15;

console.log("ARTICULO: " + articulo);
console.log("PRECIO: $" + precio);
console.log("CANTIDAD: x " + cant);
console.log("MES: " + mes);

if (mes === "octubre") {
  console.log(
    "La compra es de " +
      precioxcant +
      " y obtiene un DESCUENTO DEL 15%, TOTAL: $" +
      descuento
  );
} else {
  console.log("El TOTAL ES DE: $" + precioxcant);
}
