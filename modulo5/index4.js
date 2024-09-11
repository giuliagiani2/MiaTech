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