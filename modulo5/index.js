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
let word = prompt("Inserisci una parola");
console.log(word);
console.log(word.length);


//RICHIESTA DI IMPUT CORRETTO
do {
    word = prompt("Inserisci una parola con max 5 caratteri");
} while (word.length < 5);
console.log(word);


//IF & ELSE
const number = 11;
{
    if (number > 5) {
        console.log("La variabile è maggiore di 5");
    } else {
        console.log("La variabile è minore di 5");
    }
}


//IF, ELSE & ELSE-IF
const score = prompt("Inserisci un valore numerico");
{
    if (score <= 100 && score >= 90) {
        console.log("Voto ottimo");
    } else if (score <= 89 && score >= 70) {
        console.log("Voto buono");
    } else if (score <= 69 && score >= 60) {
        console.log("Voto sufficiente");
    } else if (score < 60) {
        console.log("Voto insufficiente");
    } else {
        console.log("Voto inserito non valido");
    }
}


//VERIFICA IL PUNTEGGIO
let classific;
if (score <= 100 && score >= 90) {
    classific = 90;
} else if (score <= 89 && score >= 70) {
    classific = 70;
} else if (score <= 69 && score >= 60) {
    classific = 60;
} else if (score < 60) {
    classific = 50;
} else {
    classific = null;
}

switch (classific) {
    case 90:
        console.log("Voto ottimo");
        break;
    case 70:
        console.log("Voto buono");
        break;
    case 60:
        console.log("Voto sufficiente");
        break;
    case 50:
        console.log("Voto insufficiente");
        break;
    default:
        console.log("Voto inserito non valido");
        break;
}


//ARRAY DI NUMERI
const numbers = [10, 8, 22, 2, 4];
console.log(numbers);


//SOMMA I NUMERI
let somma = 0;

for (let i = 0; i < numbers.length; i++) {
    somma = somma + numbers[i];
}
console.log(somma);


//ARRAY REVERSE
const numInvert = [];
for (let i = numbers.length - 1; i >= 0; i--) {
    numInvert.push(numbers[i]);
}
console.log(numInvert);


//POPOLAMENTO ARRAY
let parole = [];
for (let i = 0; i < 5; i++) {
    parola = prompt("Inserisci parola");
    parole.push(parola);
}
for (let i = 0; i < parole.length; i++) {
    if (parole[i].length % 2 !== 0) {
        console.log(parole[i]);
    }
}


//CREA UN OGGETTO
const person = {
    name: "Giulia",
    age: 20,
    city: "Milano"
}
console.log(person);


//ACCEDI ALLE PROPRIETA'
console.log(person.age);


//MODIFICA LA PROPRIETA'
person.age = 18;
console.log(person.age);


//AGGIUNGI UNA NUOVA PROPRIETA'
person.job = "student";
console.log(person.job);