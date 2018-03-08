/*
  Menu dei dolci
  Scrivi un programma stampi il seguente menu:
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia
  Inoltre, prenda in input il valore numerico della scelta.
  Se la scelta non è tra quelle elencate verrà stampata la scritta 'Dolce non disponibile' altrimenti verrà visualizzata la scelta effettuata 'Hai scelto il dolce X'.
  http://www.imparareaprogrammare.it
*/


var scelta = 2;

var menu = [
    '1. Tiramisù',
    '2. Torta della nonna',
    '3. Cheesecake alla nutella',
    '4. Macedonia'
]

for( var i = 0; i < menu.length; i++){

    if (i === scelta) {
        console.log('Scelta n°' + (i + 1) + '. Hai scelto ' + menu[i]);
    }
    else {
        console.log('Hai selezionato un dolce non disponbile');
    }

}