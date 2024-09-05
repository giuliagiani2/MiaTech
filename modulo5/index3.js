//ESTAZIONE ELEMENTI BASE, SALTARE ELEMENTI DURANTE IL DESTRUCTURING
const array = [1, 2, 3, 4, 5];

let [valore1, , valore3, altriValori] = array;
console.log("Valore 1: " + valore1);
console.log("Valore 3: " + valore3);


//DESTRUCTURING CON VALORI PREDEFINITI
const array2 = ["a", "b", "c", "d"];
let [primo, secondo, terzo, quarto, altro] = array2;
console.log("prima lettera: " + primo);
console.log("seconda lettera: " + secondo);
console.log("terza lettera: " + terzo);
console.log("quarta lettera: " + quarto);
console.log("altre lettere: " + altro);


//ESTRAZIONE DI PROPRIETA' BASE, DESTRUCTURING CON NOMI DI VARIABILI DIVERSE
const object = {
    nome: "Pippo",
    cognome: "Qwerty",
    email: "querty.pippo@gmail.com",
    eta: 40
}

let { nome: primoNome, cognome: nomeDiFamiglia, email: casellaPostale, eta: numero } = object;
console.log("Nome: " + primoNome);
console.log("Cognome: " + nomeDiFamiglia);
console.log("Email: " + casellaPostale);
console.log("Età: " + numero);


//DESTRUCTURING CON VALORI PREDEFINITI
const object2 = {
    colore: "rosso",
    pianeta: "marte",
    //verdura: "",
    frutta: "mela",
    //paesaggio: ""
}

let { colore, pianeta, verdura = "pomodoro", frutta, paesaggio = "deserto" } = object2;
console.log("Colore: " + colore);
console.log("Pianeta: " + pianeta);
console.log("Verdura: " + verdura);
console.log("Frutta: " + frutta);
console.log("Paesaggio: " + paesaggio);


//COPIA UN ARRAY
const numbers = [11, 12, 13, 14, 15];
const numbersSpread = [...numbers];

console.log("Array originale" + numbers);
console.log("Array copia" + numbersSpread);

numbers = [20, 25];
console.log(numbers);
console.log(...numbersSpread);


//UNIONE DI DUE ARRAY
const values1 = [1, 2, 3, 4, 5];
const values2 = [6, 7, 8, 9, 10];
const valuesTotal = [...values1, ...values2];

console.log(valuesTotal);


//COPIA DI UN OGGETTO CON PROPRIETA' AGGIUNTIVE
const casa = {
    tipo: "Villa",
    via: "Via Roma",
    numero: 120
};
casaSpread = { ...casa, mq: 100 };

console.log("Originale: " + casa);
console.log("Copia con una nuova proprietà" + casaSpread);