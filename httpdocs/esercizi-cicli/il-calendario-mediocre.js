/*
  Il calendario mediocre
  Scrivi un programma che stampi il calendario di un mese, ricevi in input:
    - Il numero di giorni nel mese
    - Il giorno della settimana in cui questo comincia (0: lunedì ... 6: domenica)

  Variante
  Piuttosto che passarein input i giorni del mese passa direttamente il mese e calcola tu i giorni corrispondenti.
  http://www.imparareaprogrammare.it
*/


var today = new Date();

var month = today.getMonth();
var nGiorni = new Date(2018, 2, 0).getDate();

var anno = 2018;
var mese = 3;

function dayInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}


var weekday = ['Domenica', 'lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];

for( i = 1; i <= dayInMonth(anno, mese); i++){

    var giorno = new Date(anno, mese, i);

    // console.log(giorno);

    console.log(weekday[giorno.getDay()] + ' ' + giorno.getDate() + ', ' + anno);
}

// console.log('giorni al mese: ' + nGiorni);