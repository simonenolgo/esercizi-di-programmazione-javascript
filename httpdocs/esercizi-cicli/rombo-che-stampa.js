/*
  Rombo che stampa!
  Scrivi un programma che riceva in input un numero dispari e stampi un rombo di lettere partendo dal valore, in questo modo:
    Input : 5
    Output:
            X
           XXX
          XXXXX
           XXX
            X
  Hint: per indentare puoi usare il tab con '\t'.
  http://www.imparareaprogrammare.it
*/


var input = 69;

var progress = 1;

for(var i = 1; i < input*2; i++){

    // console.log(progress);

    if(i % 2 != 0) {

        var x = '';

        // console.log(input - progress, input, progress)
        for(var m = 1; m <= (input - progress) / 2; m++){
            x += ' ';
        }

        for(var n = 1; n <= progress; n++){
            x += 'x';
        }

        console.log(x);

    } //dispari


    if( i >= input) {
        progress -=  1;
    }
    else {
        progress +=  1;
    }

}