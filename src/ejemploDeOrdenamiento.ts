let arreglo:number[] = new Array(6);
let i:number;
let j:number;
let aux:number;


for(i = 0; i<arreglo.length;i++){   //CARGO ARREGLO
  arreglo[i] = Number(prompt("Ingrese Numero " + (i+1) + ": "));
}

for(i = 0;i<arreglo.length; i++){  //MUESTRO ARREGLO
  console.log(arreglo[i]);
}


for(i = 0; i< (arreglo.length-1); i ++){    //ORDENO DE MENOR A MAYOR EL ARREGLO
  for(j = (i+1); j<arreglo.length; j++){
    if(arreglo[i]>arreglo[j]){
      aux = arreglo[i];
      arreglo[i] = arreglo[j];
      arreglo[j] = aux;
    }
  }
}
console.log("ARREGLO ORDENADO DE MENOR A MAYOR");   //IMPRIMO EL ARREGLO ORDENADO
for(i = 0; i<arreglo.length; i++){   
  console.log(arreglo[i]);
}

