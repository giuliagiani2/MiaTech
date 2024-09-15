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


//CATENA DI PROMESSE CON GESTIONE DEGLI ERRORI
function gestioneErrori() {
    return new Promise((resolve, reject) => {
        const valoreCasuale = Math.floor(Math.random() * 9);
        if (valoreCasuale > 5) {
            resolve(valoreCasuale);
        } else {
            reject("Errore!!!");
        }
    });
}
gestioneErrori()
    .then((risultato) => {
        console.log("Promessa risolta", risultato);
        const risultatoManipolato = risultato * 3;
        return risultatoManipolato;
    })
    .then((risultatoFinale) => {
        console.log("Risultato dopo la manipolazione: ", risultatoFinale);
    })
    .catch((error) => {
        console.log(error);
    })


//GESTIONE DEGLI ERRORI CON CATCH
function promessaRifiutata() {
    return new Promise((resolve, reject) => {
        reject("Promessa rifiutata");
    });
}
promessaRifiutata()
    .catch((error) => {
        console.error(error);
    })


//GESTIONE DEGLI ERRORI CON THEN E CATCH
function promessaBooleana(bool) {
    return new Promise((resolve, reject) => {
        if (bool) {
            resolve("Promessa accettata");
        } else {
            reject("Promessa rifiutata");
        }
    });
}
//Se è vero
promessaBooleana(true)
    .then((valore) => {
        console.log(valore)
    })
    .catch((error) => {
        console.log(error);
    })
//Se è falso
promessaBooleana(false)
    .then((valore) => {
        console.log(valore);
    })
    .catch((error) => {
        console.log(error);
    })


//GESTIONE DEGLI ERRORI IN UNA CATENA DI PROMESSE
function promessaCasuale() {
    return new Promise((resolve, reject) => {
        const valoreCasuale = Math.random();
        if (valoreCasuale > 0.5) {
            resolve("Promessa risolta");
        } else {
            reject("Promessa bloccata per errori");
        }
    });
}
promessaCasuale()
    .then((valore1) => {
        console.log(`Il valore ${valore1} è buono`);
        return promessaCasuale();
    })
    .then((valore1) => {
        let somma = valore1 + 3;
        console.log(`La somma di ${somma} è buono`);
    })
    .catch((error) => {
        console.log(error);
    })


//UTILIZZARE PROMISE.ALL
function promessa1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Risultato prima promise");
        }, 5000);
    });
}
function promessa2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Risultato seconda promise");
        }, 6000);
    });
}
Promise.all([promessa1(), promessa2()])
    .then((results) => {
        console.log("Risolte entrambe le promesse: ", results);
    })
    .catch((error) => {
        console.log(error);
    })


//UTILIZZARE PROMISE.RACE
function promessa1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Prima promise");
        }, 8000);
    });
}
function promessa2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Seconda promise");
        }, 7000);
    });
}
Promise.race([promessa1(), promessa2()])
    .then((valori) => {
        console.log("Promsie che si è risolta prima è: ", valori);
    })
    .catch((error) => {
        console.log(error);
    })


//UTILIZZARE PROMISE.ALLSETTLED
function promessa1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Risultato prima promessa");
        }, 1000);
    });
}
function promessa2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Seconda promsessa rifiutata");
        }, 1500);
    });
}
function promessa3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Risultato terza promessa");
        }, 1000);
    });
}
Promise.allSettled([promessa1(), promessa2(), promessa3()])
    .then((risultati) => {
        risultati.forEach((risultati, index) => {
            console.log(risultati, index);
        });
    })


//FUNZIONE SEMPLICE ASINCRONA
function promessaPrincipale() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promessa eseguita dopo 2 secondi");
        }, 2000);
    });
}
async function funzioneAsincrona() {
    let ris = await promessaPrincipale();
    console.log(ris);
}
funzioneAsincrona();


//GESTIONE DEGLI ERRORI CON TRY CATCH
function promessa(bool) {
    return new Promise((resolve, reject) => {
        if (bool) {
            resolve("Promessa risolta");
        } else {
            reject("Promessa rifiutata");
        }
    });
}
async function funzioneAsincronaBool(valore) {
    try {
        const funzione = await promessa(valore);
        console.log(funzione);
    } catch (error) {
        console.log(error);
    }
}
funzioneAsincronaBool(true);
funzioneAsincronaBool(false);


//FUNZIONI ASINCRONE IN SERIE
async function primaFunzioneAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Funzione 1 risolta");
        }, 1000);
    });
}
async function secondaFunzioneAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Funzione 2 risolta");
        }, 2000);
    });
}
async function terzaFunzioneAsync() {
    try {
        const primoRis = await primaFunzioneAsync();
        console.log(primoRis);

        const secondoRis = await secondaFunzioneAsync();
        console.log(secondoRis);
    } catch (error) {
        console.log(error)
    }
}
terzaFunzioneAsync();


//ESEGUIRE UNA RICHIESTA GET SEMPLICE
function fetchData() {
    const url = "";
    fetch(url, {
        method: "GET"
    })
        .then((response) => {
            if (!response.ok) {
                console.log("Errore");
            }
            return response.json();
        })
        .then((data) => {
            if (data) {
                console.log(data);
            }
        })
        .catch((error) => {
            console.log(error);
        })
}
fetchData();