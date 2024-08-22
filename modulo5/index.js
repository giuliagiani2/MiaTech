//DICHIARAZIONE DI VARIABILI
let var1 = 0;
const var2 = 1;

console.log(var1);
console.log(var2);


//CAMBIO DI VALORE
let var3 = 5;
console.log(var3);

var3 = 8;
console.log(var3);


//RIDEFINIZIONE DI VARIABILE
let number = 24;
{
    let number = 25;
    console.log(number);
}
console.log(number);


//SCOPING DELLE VARIABILI
let outside = 17;
{
    let inside = 19;
    console.log(outside);
    console.log(inside);
}
console.log(outside);
console.log(inside);


//GENERA NUMERI PARI
for (let i = 0; i <= 20; i = i + 2) {
    console.log(i);
}


//NUMERI DISPARI DECRESCENTI
let disp = 9;
while (disp > 0) {
    console.log(disp);
    disp = disp - 2;
}


//IL PROMPT E LA LUNGHEZZA DELLA PAROLA
let word=prompt("Inserisci una parola");
console.log(word);
console.log(word.length);