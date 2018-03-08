/*
  Pari o dispari?
  Scrivi un programma che prenda in input un numero intero e restituisca 0 se è pari o 1 se è dispari.
  http://www.imparareaprogrammare.it
*/


var input = 14;

var resto = input%2;


if (resto === 0){
    console.log(input + ' è un numero pari');
}
else {
    console.log(input + ' è un numero dispari');
}
