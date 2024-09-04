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