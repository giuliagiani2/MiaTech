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


//FUNZIONI CON PARAMETRI VARIABILI
function somma(...numeri) {
    return numeri.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
}
const ris1 = somma(1, 2, 3);
const ris2 = somma(10);
const ris3 = somma();

console.log("Risultato 1: " + ris1);
console.log("Risultato 2: " + ris2);
console.log("Risultato 3: " + ris3);


//DESTRUCTURING ARRAY CON REST OPERATOR
const numbers2 = [10, 20, 30, 40, 50];
const [num1, num2, ...otherNum] = numbers2;

console.log("Primo numero: " + num1);
console.log("Secondo numero: " + num2);
console.log("Altri numeri: " + otherNum);


//DESTRUCTURING PGGETTO CON REST OPERATOR
const obj = {
    prop1: "ciao",
    prop2: 1,
    prop3: "utente",
    prop4: 2
}
const { prop1, prop3, ...otherProp } = obj;
console.log("Prima proprietà" + prop1);
console.log("Terza proprietà" + prop3);
console.log("Altre proprietà" + otherProp);


//CONVERSIONE DI UN OGGETTO IN UNA STRINGA JSON
const obj2 = {
    prop5: "a",
    prop6: 0,
    prop7: "b"
};
const daOggettoAStringa = JSON.stringify(obj2);

console.log(daOggettoAStringa);