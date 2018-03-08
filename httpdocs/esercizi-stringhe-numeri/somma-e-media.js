/*
  Somma e media
  Scrivi un programma che prenda in input 5 numeri a tua scelta e restituisca in output la somma e la media.
  http://www.imparareaprogrammare.it
*/

var numeri = [3, 4, 7, 14, 55];

var somma = 0;

for (i = 0; i < numeri.length; i++){
    somma += numeri[i];
}

console.log('somma: ' + somma);
console.log('media: ' + (somma/numeri.length));