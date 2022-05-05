let sueldo: number = Number(prompt("Ingrese el SUELDO: "));
let desc20: number = sueldo + sueldo * 0.2;
let desc10: number = sueldo + sueldo * 0.1;
let desc5: number = sueldo + sueldo * 0.05;
let opcion: number = Number(prompt("Ingrese una Opcion: "));

switch (opcion) {
  case 1:
    console.log;

    break;

  default:
    break;
}

if (sueldo > 0 && sueldo <= 15000) {
  console.log("Su sueldo es de: $" + sueldo);
  console.log("Recibe un AUMENTO del 20%, TOTAL: $" + desc20);
} else if (sueldo >= 15001 && sueldo <= 20000) {
  console.log("Su sueldo es de: $" + sueldo);
  console.log("Recibe un AUMENTO del 10%, TOTAL: $" + desc10);
} else if (sueldo >= 20001 && sueldo <= 25000) {
  console.log("Su sueldo es de: $" + sueldo);
  console.log("Recibe un AUMENTO del 5%, TOTAL: $" + desc5);
} else {
  console.log("Su sueldo es de: $" + sueldo);
  console.log("Por lo tanto no hay Aumento alguno");
}
