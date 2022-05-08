/*Una empresa desea premiar a sus empleados con un
aumento de sueldo. Este aumento se ajusta a la siguiente tabla:

Sueldo Actual         Sueldo con Aumento
0 - 15.000$          20%
15.001 - 20.000$     10%
20.001 - 25.000$     5%
Más de 25.000$       No hay aumento
• Desarrolle un algoritmo dado el salario actual de un
empleado determine el aumento de sueldo a aplicar y
se lo muestre. */
let sueldo: number = Number(prompt("Ingrese el SUELDO: "));
let desc20: number;
let desc10: number;
let desc5: number;

while (sueldo <= 0) {
  prompt("DATO NO VALIDO", "HAGA CLIC EN ACEPTAR PARA CONTINUAR");
  sueldo = Number(prompt("Ingrese nuevamente el SUELDO: "));
}

desc20 = sueldo + sueldo * 0.2;
desc10 = sueldo + sueldo * 0.1;
desc5 = sueldo + sueldo * 0.05;

if (sueldo > 0 && sueldo <= 15000) {
  console.log("Su sueldo es de: $" + sueldo);
  console.log("Recibe un AUMENTO del 20%, TOTAL: $" + desc20);
} else if (sueldo >= 15001 && sueldo <= 20000) {
  console.log("Su sueldo es de: $" + sueldo);
  console.log("Recibe un AUMENTO del 10%, TOTAL: $" + desc10);
} else if (sueldo >= 20001 && sueldo <= 25000) {
  console.log("Su sueldo es de: $" + sueldo);
  console.log("Recibe un AUMENTO del 5%, TOTAL: $" + desc5);
} else if (sueldo > 25000) {
  console.log("Su sueldo es de: $" + sueldo);
  console.log("Por lo tanto no hay Aumento alguno");
}
