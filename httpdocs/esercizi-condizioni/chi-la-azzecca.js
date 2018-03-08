/*
  Chi l'azzecca?
  Scrivi un programma che generi un numero casuale compreso tra 1 e 100 (zero escluso).
  Successivamente prendi in input altri due numeri di due ipotetici utenti, e comunica se uno dei due ha azzeccato il numero casuale, in caso contrario quale dei due si è avvicinato di più al numero.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, che restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/


var random = Math.floor(Math.random()*(100));

var player1 = 3;
var player2 = 85;
var vincitore;

if (random == player1){
    risultato = 'Il vincitore è player 1 con il numero ' + player1;
}
else if (random == player2){
    risultato = 'Il vincitore è player 2 con il numero ' + player2;
}

else {
    risultato = 'Nessun giocatore ha vinto'
}

console.log('Numero: ' + random);
console.log('player 1: ' + player1);
console.log('player 2: ' + player2);
console.log(risultato);
