/*Dados estos 5 arreglos que representan las ventas semanales del primer trimentre,
corresspondientes a 5 vendedores de la empresa: Camila, Franco, Sofia, Matias y Agustina,
respectivamente.vendedor1 [32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493,
23062, 31908, 30369, 30652] vendedor2 [27520, 31480, 24053, 34823, 32942, 38477, 23756,
21413, 26699, 22045, 25625, 26855] vendedor3 [20584, 33473, 34300, 24598, 33955, 24040,
39173, 25542, 25105, 26759, 29790, 36218] vendedor4 [27243, 38774, 21246, 30691, 24542,
39771, 31807, 31641, 20850, 29837, 37182, 28006] vendedor5 [23334, 32687, 25217, 26844,
27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562]Escribir un programa que permita
determinar:
Para cada vendedor mostrar su nombre y 1- su venta maxima indicando semana y
mes de la misma.2- su venta minima indicando semana y mes de la misma.3- su promedio semanal
de ventas.4- su promedio mensual de ventas.Entre todos los vendedores calcular:
5- nombre y monto vendido del mejor vendedor de cada semana.6- nombre y suma de montos
vendidos del mejor vendedor de cada mes7- nombre y suma de montos vendidos del peor 
vendedor de cada mes8- nombre y suma de montos vendidos de peor vendedor del 
trimestreTenga en cuenta que cada valor en los arreglos es la venta de una semana,
y que cuatro semanas forman un mes*/

let vendedores:string[] = ["CAMILA", "FRANCO", "SOFIA", "MATIAS", "AGUSTINA"];
let semanas:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let meses:number[] = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3];
let vendedor1: number[] = [32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493, 23062, 31908, 30369, 30652];
let vendedor2: number[] = [27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855];
let vendedor3: number[] = [20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25105, 26759, 29790, 36218];
let vendedor4: number[] = [27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006];
let vendedor5: number[] = [23334, 32687, 25217, 26844, 27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562];
let venta_Maxima:number = 0;
let venta_Minima:number = 0;
let semana:number = 0;
let mes:number = 0;
let sumador:number = 0;

console.log("*************************************************");
console.log("VENDEDOR/A: [" + vendedores[0]+ "]");

for(let i:number = 0;i<vendedor1.length;i++){   //venta maxima
  if(i === 0){
    venta_Maxima = vendedor1[i];
    semana = semanas[i];     //Guardo posicion de la SEMANA
    mes = meses[i];          //Guardo posicion del MES
  } else if(vendedor1[i]>venta_Maxima){
    venta_Maxima=vendedor1[i];
    semana = semanas[i];
    mes = meses[i];
  }
  sumador = sumador + vendedor1[i];  //SUMO LAS VENTAS Y LAS GUARDO EN LA VARIABLE
}
console.log("1). La venta MAXIMA es de: $" + venta_Maxima);  //Imprimo Venta Maxima
console.log("SEMANA: " + semana);
console.log("MES: " + mes);        

for(let i:number = 0;i<vendedor1.length;i++){    //venta minima
  if(i === 0){
    venta_Minima = vendedor1[i];
    semana = semanas[i];     //Guardo posicion de la SEMANA
    mes = meses[i];          //Guardo posicion del MES
  } else if(vendedor1[i]<venta_Minima){
    venta_Minima=vendedor1[i];
    semana = semanas[i];
    mes = meses[i];
  }
}
console.log("2). La venta MINIMA es de: $" + venta_Minima);   //Imprimo Venta Minima
console.log("SEMANA: " + semana);
console.log("MES: " + mes);
console.log("3). PROMEDIO SEMANAL: $" + sumador/12);  
console.log("4). PROMEDIO MENSUAL: $" + sumador/4);   

console.log("*************************************************");
console.log("VENDEDOR/A: [" + vendedores[1]+ "]");
sumador = 0;

for(let i:number = 0;i<vendedor2.length;i++){   //venta maxima
  if(i === 0){
    venta_Maxima = vendedor2[i];
    semana = semanas[i];     //Guardo posicion de la SEMANA
    mes = meses[i];          //Guardo posicion del MES
  } else if(vendedor2[i]>venta_Maxima){
    venta_Maxima=vendedor2[i];
    semana = semanas[i];
    mes = meses[i];
  }
  
  sumador = sumador + vendedor2[i];  //SUMO LAS VENTAS Y LAS GUARDO EN LA VARIABLE
}
console.log("1). La venta MAXIMA es de: $" + venta_Maxima);  //Imprimo Venta Maxima
console.log("SEMANA: " + semana);
console.log("MES: " + mes);        

for(let i:number = 0;i<vendedor2.length;i++){    //venta minima
  if(i === 0){
    venta_Minima = vendedor2[i];
    semana = semanas[i];     //Guardo posicion de la SEMANA
    mes = meses[i];          //Guardo posicion del MES
  } else if(vendedor2[i]<venta_Minima){
    venta_Minima=vendedor2[i];
    semana = semanas[i];
    mes = meses[i];
  }
}
console.log("2). La venta MINIMA es de: $" + venta_Minima);   //Imprimo Venta Minima
console.log("SEMANA: " + semana);
console.log("MES: " + mes);
console.log("3). PROMEDIO SEMANAL: $" + sumador/12);  
console.log("4). PROMEDIO MENSUAL: $" + sumador/4);

console.log("*************************************************");
console.log("VENDEDOR/A: [" + vendedores[2]+ "]");
sumador = 0;
for(let i:number = 0;i<vendedor3.length;i++){   //venta maxima
  if(i === 0){
    venta_Maxima = vendedor3[i];
    semana = semanas[i];     //Guardo posicion de la SEMANA
    mes = meses[i];          //Guardo posicion del MES
  } else if(vendedor3[i]>venta_Maxima){
    venta_Maxima=vendedor3[i];
    semana = semanas[i];
    mes = meses[i];
  }
  
  sumador = sumador + vendedor3[i];  //SUMO LAS VENTAS Y LAS GUARDO EN LA VARIABLE
}
console.log("1). La venta MAXIMA es de: $" + venta_Maxima);  //Imprimo Venta Maxima
console.log("SEMANA: " + semana);
console.log("MES: " + mes);        

for(let i:number = 0;i<vendedor3.length;i++){    //venta minima
  if(i === 0){
    venta_Minima = vendedor3[i];
    semana = semanas[i];     //Guardo posicion de la SEMANA
    mes = meses[i];          //Guardo posicion del MES
  } else if(vendedor3[i]<venta_Minima){
    venta_Minima=vendedor3[i];
    semana = semanas[i];
    mes = meses[i];
  }
}
console.log("2). La venta MINIMA es de: $" + venta_Minima);   //Imprimo Venta Minima
console.log("SEMANA: " + semana);
console.log("MES: " + mes);
console.log("3). PROMEDIO SEMANAL: $" + sumador/12);  
console.log("4). PROMEDIO MENSUAL: $" + sumador/4);

console.log("*************************************************");
console.log("VENDEDOR/A: [" + vendedores[3]+ "]");
sumador = 0;
for(let i:number = 0;i<vendedor4.length;i++){   //venta maxima
  if(i === 0){
    venta_Maxima = vendedor4[i];
    semana = semanas[i];     //Guardo posicion de la SEMANA
    mes = meses[i];          //Guardo posicion del MES
  } else if(vendedor4[i]>venta_Maxima){
    venta_Maxima=vendedor4[i];
    semana = semanas[i];
    mes = meses[i];
  }
  
  sumador = sumador + vendedor4[i];  //SUMO LAS VENTAS Y LAS GUARDO EN LA VARIABLE
}
console.log("1). La venta MAXIMA es de: $" + venta_Maxima);  //Imprimo Venta Maxima
console.log("SEMANA: " + semana);
console.log("MES: " + mes);        

for(let i:number = 0;i<vendedor4.length;i++){    //venta minima
  if(i === 0){
    venta_Minima = vendedor4[i];
    semana = semanas[i];     //Guardo posicion de la SEMANA
    mes = meses[i];          //Guardo posicion del MES
  } else if(vendedor4[i]<venta_Minima){
    venta_Minima=vendedor4[i];
    semana = semanas[i];
    mes = meses[i];
  }
}
console.log("2). La venta MINIMA es de: $" + venta_Minima);   //Imprimo Venta Minima
console.log("SEMANA: " + semana);
console.log("MES: " + mes);
console.log("3). PROMEDIO SEMANAL: $" + sumador/12);  
console.log("4). PROMEDIO MENSUAL: $" + sumador/4);

console.log("*************************************************");
console.log("VENDEDOR/A: [" + vendedores[4]+ "]");
sumador = 0;
for(let i:number = 0;i<vendedor4.length;i++){   //venta maxima
  if(i === 0){
    venta_Maxima = vendedor5[i];
    semana = semanas[i];     //Guardo posicion de la SEMANA
    mes = meses[i];          //Guardo posicion del MES
  } else if(vendedor5[i]>venta_Maxima){
    venta_Maxima=vendedor5[i];
    semana = semanas[i];
    mes = meses[i];
  }
  
  sumador = sumador + vendedor5[i];  //SUMO LAS VENTAS Y LAS GUARDO EN LA VARIABLE
}
console.log("1). La venta MAXIMA es de: $" + venta_Maxima);  //Imprimo Venta Maxima
console.log("SEMANA: " + semana);
console.log("MES: " + mes);        

for(let i:number = 0;i<vendedor1.length;i++){    //venta minima
  if(i === 0){
    venta_Minima = vendedor5[i];
    semana = semanas[i];     //Guardo posicion de la SEMANA
    mes = meses[i];          //Guardo posicion del MES
  } else if(vendedor5[i]<venta_Minima){
    venta_Minima=vendedor5[i];
    semana = semanas[i];
    mes = meses[i];
  }
}
console.log("2). La venta MINIMA es de: $" + venta_Minima);   //Imprimo Venta Minima
console.log("SEMANA: " + semana);
console.log("MES: " + mes);
console.log("3). PROMEDIO SEMANAL: $" + sumador/12);  
console.log("4). PROMEDIO MENSUAL: $" + sumador/4);

console.log("-----------------------------------------------------");


































// METODO PARA OBTENER MAXIMO Y MINIMO, TENER EN CUENTA LIMPIAR MAX, MIN Y SUMADOR.

/*for(let i:number = 0;i<vendedor2.length;i++){   //venta maxima
  if(vendedor2[i]>venta_Maxima){
    venta_Maxima = vendedor2[i];
    semana = semanas[i];     //Guardo posicion de la SEMANA
    mes = meses[i];          //Guardo posicion del MES
  }
  sumador = sumador + vendedor2[i];  //SUMO LAS VENTAS Y LAS GUARDO EN LA VARIABLE
}
console.log("1). La venta MAXIMA es de: $" + venta_Maxima);  //Imprimo Venta Maxima
console.log("SEMANA: " + semana);
console.log("MES: " + mes);        


for(let i:number = 0;i<vendedor2.length;i++){    //venta minima
  if(vendedor2[i]<venta_Minima){
    venta_Minima = vendedor2[i];
    semana = semanas[i];    //Guardo posicion de la semana
    mes = meses[i];          //Guardo posicion del Mes
  }
}*/

/*console.log("2). La venta MINIMA es de: $" + venta_Minima);   //Imprimo Venta Minima
console.log("SEMANA: " + semana);
console.log("MES: " + mes);
console.log("3). PROMEDIO SEMANAL: $" + sumador/12);  
console.log("4). PROMEDIO MENSUAL: $" + sumador/4);*/




//otro metodo para obtener el MES.

/*if(semana>=1 && semana<=4){           //comparo condicion para el MES.
  console.log("MES: " + 1);
}else if(semana>=5 && semana<=8){
  console.log("MES: " + 2);
}else if(semana>=9 && semana<=12){
  console.log("MES: " + 3);
}*/

/*if(semana>=1 && semana<=4){             //COMPARO CONDICION PARA EL MES
  console.log("MES: " + 1);
}else if(semana>=5 && semana<=8){
  console.log("MES: " + 2);
}else if(semana>=9 && semana<=12){
  console.log("MES: " + 3);
}*/