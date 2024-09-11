//FUNZIONE DI BASE CON CALLBACK
function sommaFunzione(a, b, callback) {
    let somma = 0;
    somma = a + b;

    callback(somma);
}
function callbackFunzione(somma) {
    console.log("Risultato della funzione: ", somma);
}
sommaFunzione(10, 10, callbackFunzione);


//FUNZIONE CALLBACK E PASSAGGIO DI PARAMETRI
function funzionePrincipale(a, b, callback) {
    let sottrazione = 0;
    sottrazione = a - b;

    callback(sottrazione);
}
function funzioneCallback(sottrazione) {
    console.log("Risultato della funzione: ", sottrazione);
}
funzionePrincipale(8, 6, funzioneCallback);


//CALLBACK ANNIDIATI
function funzioneUno(a, b, callback) {
    let risultato1 = 0;
    risultato1 = a * b;

    callback(risultato1);
}
function funzioneDue(risultato1, b, callback) {
    let risultato2 = 0;
    risultato2 = risultato1 / b;

    callback(risultato2);
}
function risultatoFinale(risultato2) {
    console.log("Risultato finale delle due funzioni: ", risultato2);
}
funzioneUno(2, 3, function (risultato1) {
    funzioneDue(risultato1, 2, risultatoFinale);
})


//CREARE UNA PROMESSA SEMPLICE
function promessaSemplice() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("La promessa è stata risolta dopo 2 secondi!");
        }, 2000);
    });
}
promessaSemplice()
    .then((messaggio) => {
        console.log(messaggio);
    });