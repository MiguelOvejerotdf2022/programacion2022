/*Hacer un programa que simule la compra que hace un cliente en un supermercado.
El cliente va tener que ingresar por teclado la CANTIDAD de productos que va a llevar,
los PRODUCTOS que va a comprar, el PRECIO UNITARIO de cada producto y
la CANTIDAD A COMPRAR DE CADA producto. Finalizada la compra, el programa
va a mostrar por pantalla
el detalle de la compra, productos, cantidad, precio unitario y precio total.
Dependiendo del monto comprado, el cliente participa de un sorteo:
• si compra menos de 1000 no participa por nada
• si compra mas de 3000 participa por un 0km
• si compra mas de 2000 pero menos de 3000 participa por una
moto 0k
• si compra mas de 1000 pero menos de 2000 participa un tv led*/

function cargar_Arreglos(
  parametro1: string[],
  parametro2: number[],
  parametro3: number[],
  parametro4: number[]
): void {
  let i: number;
  for (i = 0; i < parametro1.length; i++) {
    parametro1[i] = prompt("PRODUCTO " + (i + 1));
    parametro2[i] = Number(prompt("PRECIO UNITARIO: $"));
    parametro3[i] = Number(prompt("CANTIDAD A LLEVAR: "));
    parametro4[i] = parametro2[i] * parametro3[i];
  }
}

function mostrar_Arreglos(
  parametro1: string[],
  parametro2: number[],
  parametro3: number[],
  parametro4: number[]
): void {
  let i: number;
  for (i = 0; i < parametro1.length; i++) {
    console.log("PRODUCTO: " + parametro1[i]);
    console.log("PRECIO UNITARIO: $" + parametro2[i]);
    console.log("CANTIDAD x " + parametro3[i]);
    console.log("PRECIO FINAL: $" + parametro4[i]);
    console.log("*********************************");
  }
}

function ObtenerprecioFinal(dato1: number, dato2: number[]): number {
  let i: number;
  for (i = 0; i < dato2.length; i++) {
    dato1 = dato1 + dato2[i];
  }
  return dato1;
}

let total_Productos: number = Number(prompt("CANTIDAD TOTAL DE PRODUCTOS: "));
let nombre_Producto: string[] = new Array(total_Productos);
let precio_Unitario: number[] = new Array(total_Productos);
let cantidad_Unitaria: number[] = new Array(total_Productos);
let precioTotalPorProducto: number[] = new Array(total_Productos);
let precioFinal: number = 0;

console.log("TICKET DE COMPRA");
console.log("---- DETALLE ---");
cargar_Arreglos(
  nombre_Producto,
  precio_Unitario,
  cantidad_Unitaria,
  precioTotalPorProducto
);
mostrar_Arreglos(
  nombre_Producto,
  precio_Unitario,
  cantidad_Unitaria,
  precioTotalPorProducto
);
console.log("---------------------------------");
console.log(
  "TOTAL DE LA COMPRA: $" +
    ObtenerprecioFinal(precioFinal, precioTotalPorProducto)
);

if (ObtenerprecioFinal(precioFinal, precioTotalPorProducto) < 1000) {
  console.log("NO PARTICIPA POR SORTEO");
} else if (
  ObtenerprecioFinal(precioFinal, precioTotalPorProducto) > 1000 &&
  ObtenerprecioFinal(precioFinal, precioTotalPorProducto) < 2000
) {
  console.log("PARTICIPA POR UN TV LED!!!");
} else if (
  ObtenerprecioFinal(precioFinal, precioTotalPorProducto) > 2000 &&
  ObtenerprecioFinal(precioFinal, precioTotalPorProducto) < 3000
) {
  console.log("PARTICIPA POR UNA MOTO 0 KM!!!");
} else if (ObtenerprecioFinal(precioFinal, precioTotalPorProducto) > 3000) {
  console.log("PARTICIPA POR UN 0 KM!!!");
}
console.log("----------------------------------");

/*                         OPCION 1 CON UN SOLO FOR:
let cantidadTotalDeProductos: number = Number(prompt("CANTIDAD TOTAL de Produtos: "));
let nombre_Producto: string;
let precio_Unitario: number;
let cantidad_ALlevar: number;
let precio_FinalPorProducto: number = 0;
let suma: number = 0;
let indice: number;

for (indice = 0; indice < cantidadTotalDeProductos; indice++) {
  nombre_Producto = prompt("Producto " + (indice + 1));
  precio_Unitario = Number(prompt("Precio Unitario: $"));
  cantidad_ALlevar = Number(prompt("Cantidad a llevar: "));
  precio_FinalPorProducto = precio_Unitario * cantidad_ALlevar;
  suma = suma + precio_FinalPorProducto;
  console.log("PRODUCTO: " + nombre_Producto);
  console.log("PRECIO UNITARIO : $" + precio_Unitario);
  console.log("CANTIDAD x " + cantidad_ALlevar);
  console.log("PRECIO FINAL POR PRODUCTO: $" + precio_FinalPorProducto);
  console.log("*******************************************");
}
console.log("----------------------------------------");
console.log("PRECIO TOTAL DE LA COMPRA: $" + suma);
if(suma<1000){
  console.log("NO PARTICIPA POR SORTEO");
} else if(suma>1000 && suma<2000){
  console.log("PARTICIPA POR UN TV LED!!");
} else if(suma>2000 && suma<3000){
  console.log("PARTICIPA POR UNA MOTO 0 KM");
} else if(suma>3000){
  console.log("PARTICIPA POR UN 0 KM");
}
console.log("----------------------------------------");
*/
