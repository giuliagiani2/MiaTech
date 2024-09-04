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


//ESTRAZIONE DI PROPRIETA' BASE
const object = {
    nome: "Pippo",
    cognome: "Qwerty",
    email: "querty.pippo@gmail.com",
    eta: 40
}

let { nome, cognome, email, eta } = object;
console.log("Nome: " + nome);
console.log("Cognome: " + cognome);
console.log("Email: " + email);
console.log("Età: " + eta);