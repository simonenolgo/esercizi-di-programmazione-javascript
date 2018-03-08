/*
  Quanti anni ha?
  Scrivi un programma che prenda in input un anno di nascita e determini l'età della persona, calcola anche quanti anni sono necessari per raggiungere i 100. Stampa in output entrambi i risultati.
  http://www.imparareaprogrammare.it
*/


var annoDiNascita = 1990;
var today = new Date();
var yyyy = today.getFullYear();

var nAnni = yyyy - annoDiNascita;
var anniMancantiPer100 = 100 - nAnni;

console.log('hai ' + nAnni + 'anni');
console.log('Ti mancano ' + anniMancantiPer100 + ' anni per arrivare a 100');