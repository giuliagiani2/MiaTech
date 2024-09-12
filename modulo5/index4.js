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


//CREARE UNA PROMESSA SEMPLICE, GESTIONE DI UNA PROMESSA CON CATCH
function promessaSemplice(condizione) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (condizione) {
                resolve("La promessa è stata risolta dopo 2 secondi!");
            } else {
                reject("La promessa è stata rifiutata");
            }
        }, 2000);
    });
}
promessaSemplice(true)
    .then((messaggio) => {
        console.log(messaggio);
    })
    .catch((errore) => {
        console.error(errore);
    })


//PROMESSA CON FINALLY
function promiseFinally(successivo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (successivo) {
                resolve("Operazione completata!");
            } else {
                reject("Verificato errore durante l'operazione");
            }
        }, 1000);
    })
}
promiseFinally()
    .then((messaggio) => {
        console.log(messaggio);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Operazione eseguita indipendentemente dal risultato");
    })

//Se è vera
promiseFinally(true);
//Se è falsa
promiseFinally(false);


//CATENA DI PROMESSE SEMPLICI
function sommaEProdotto() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5);
        }, 3000);
    });
}
sommaEProdotto()
    .then((valore) => {
        let prodotto = 0;
        prodotto = valore * 2;
        console.log("Risultato: ", prodotto);
        return prodotto;
    })
    .then((prodotto) => {
        let somma = 0;
        somma = prodotto + 3;
        console.log("Risultato: ", somma);
        return somma;
    })
    .catch((error) => {
        console.log(error);
    })


//CATENA DI PROMESSE CON CONDIZIONI
function verificaNumero() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(4);
        }, 3000);
    })
}
verificaNumero()
    .then((valore) => {
        if (valore % 2 == 0) {
            console.log("Il numero inserito è pari.");
            return valore * 2;
        } else {
            console.log("Il numero inserito è dispari.");
            return valore + 1;
        }
    })