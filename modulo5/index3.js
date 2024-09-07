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
let numbers = [11, 12, 13, 14, 15];
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


//CONVERSIONE DI UNA STRINGA JSON IN UN OGGETTO
const string = `{"primo":"ciao", "secondo":"come", "terzo":"stai"}`;
const daStringaAdOggetto = JSON.parse(string);

console.log(daStringaAdOggetto);


//MANIPOLAZIONE DI DATI JSON
const persone = `[{"nome":"giulia", "cognome":"giani", "eta":20},{"nome":"alberto", "cognome":porta"", eta:45}]`;
const personeArray = JSON.parse(persone);
personeArray.push({ nome: "maria", cognome: "rossi", eta: 14 });
const personeArrayConvert = JSON.stringify(personeArray);

console.log(personeArrayConvert);


//STRINGA SEMPLICE CON TEMPLATE LITERALS
const nome = "John";
const cognome = "Wood";
const nomeCompleto = `Ciao sono ${nome} ${cognome}`;

console.log("Frase completa:  " + nomeCompleto);


//STRINGA MULTILINEA CON TEMPLATE LITERALS
const name1 = "Simone";
const surname = "Costa";
const age = 30;
const city = "Roma";
const stringMultilinea = `Ciao sono ${name1} ${surname} ${age} anni e vivo a ${city}.`;

console.log(stringMultilinea);


//FUNZIONE E TEMPLATE LITERALS
function funzionePersona(per) {
    return `nome:  ${per.nome}  città:  ${per.citta}  età:  ${per.eta}`;
}

const oggettoPersona = {
    nome: "Leo",
    citta: "Venezia",
    eta: 20
}

const risultato = funzionePersona(oggettoPersona);
console.log(risultato);


//UTILIZZARE CONSOLE.LOG
const num4 = 10;
const string1 = "nome";
const array3 = [1, 2, 3, 4, 5];
const oggetto = {
    prop1: "proprietà 1",
    prop2: "proprietà 2",
    prop3: 0
};

console.log("Numero: ", num4);
console.log("stringa: ", string1);
console.log("array: ", array3);
console.log("oggetto: ", oggetto.prop2);


//UTILIZZARE CONSOLE.ERROR E CONSOLE.WARN
const var1 = 1;

if (var1 == 1) {
    console.error("Verificato errore");
} else if (var1 == 2) {
    console.warn("Valore già presente");
} else {
    console.log("Il valore inserito è buono");
}