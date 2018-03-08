/*
  Maggiore e minore
  Scrivi un programma che prenda quattro numeri in input, stampi in output il maggiore e il minore.
  http://www.imparareaprogrammare.it
*/


var numeri = [4, 8,15, 16, 2];

var minore = numeri[0];
var maggiore = 1;

for (var i = 0; i < numeri.length; i++){

    if (numeri[i] > maggiore){
        maggiore = numeri[i];
    }

    if (numeri[i] < minore){
        minore = numeri[i];
    }

}

console.log('tra i numeri ' + numeri + ' il numero minore è ' + minore + ' mentre il numero maggiore è ' + maggiore)