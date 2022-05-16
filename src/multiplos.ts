/*• Cree un algoritmo que visualice los números que son múltiplos de 2 o
de 3 que hay entre 1 y 100 
• Tener en cuenta que hay números que son múltiplos de 2 y de 3 al mismo tiempo
• En dichos casos, solamente indique el número una vez*/

for (let indice: number = 1; indice <= 100; indice++) {
  if (indice % 2 === 0 || indice % 3 === 0) {
    console.log(indice);
  }
}
