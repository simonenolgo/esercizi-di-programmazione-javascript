/*
  Vinci tu!
  Scrivi un programma che simula un gioco di dadi tra due utenti, prendi in input il numero di quanti tiri effettuare per ciascun giocatore (N), dopodiché ogni utente tira N volte un dado a sei facce.
  Stampa il vincitore che ha totalizza più punti.
  http://www.imparareaprogrammare.it
*/


n = 3;
var player1 = 0;
var player2 = 0;
var risultatoDado1;
var risultatoDado2;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}

for(i = 0; i < 3; i++){

    risultatoDado1 = getRandomIntInclusive(1,6);
    player1 += risultatoDado1;

    risultatoDado2 = getRandomIntInclusive(1,6);
    player2 += risultatoDado2;

}

console.log('Ridultato giocatore 1: ' + player1);
console.log('Ridultato giocatore 2: ' + player2);

if(player1 > player2){
    console.log('Il giocatore 1 ha vinto')
}
else if (player2 > player1) {
    console.log('Il giocatore 2 ha vinto')
}
else {
    console.log('Pareggio!')
}