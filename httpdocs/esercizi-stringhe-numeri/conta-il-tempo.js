/*
  Conta il tempo
  Scrivi un programma che prenda in input un numero di secondi e calcoli la quantità di ore, minuti e secondi corrispondenti, poi stampa il risultato. L'output avrà solo numeri interi.
  Esempio
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.
  http://www.imparareaprogrammare.it
*/


var secondi = 1234567;

var minuti = Math.floor(secondi/60);
var ore = Math.floor(minuti/60);

var minutiFinali = minuti - (ore*60);
var secondiFinali = secondi - (minuti*60);


console.log('ore: ' + ore);
console.log('minuti: ' + minutiFinali);
console.log('secondi: ' + secondiFinali);