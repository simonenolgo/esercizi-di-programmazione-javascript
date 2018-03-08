/*
  Caldo o freddo
  Scrivi un programma che prenda in input sette valori relativi alle temperature della settimana e stabilisca la giornata più calda e quella più fredda.
  http://www.imparareaprogrammare.it
*/


var gradi = [3,4,0,9,5,8,1,12];

var maggiore = gradi[0];
var minore = gradi[0];

for ( var i = 0; i < gradi.length; i++) {

    if (gradi[i] > maggiore ) {
        maggiore = gradi[i]
    }

    if (gradi[i] < minore) {
        minore = gradi[i]
    }

}

console.log('la temperature maggiore è ' + maggiore + ', mentre la minore è ' + minore)