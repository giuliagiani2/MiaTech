//GESTIRE I COOKIES
//salvare un cookie
function setCookies(nome, valore) {
    const d = new Date();
    d.setTime(d.getTime() + (24 + 60 * 60 * 1000));
    let expires = "expires= " + d.toUTCString();
    document.cookie = nome + " " + valore + " ;" + expires + ";path=/";
    console.log("Cookies salvato: ", nome + "=", valore);
}
//recuperare un cookie
function getCookie(nome) {
    const nome1 = nome + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        if (c.indexOf(nome1) == 0) {
            console.log(`Cookie recuperato: ${nome}=${c.substring(nome1.length)}`);
            return c.substring(nome1.length);
        }
    }
    console.log(`Cookie non trovato: ${nome}`);
    return " ";
}
//rimuovere un cookie
function deleteCookie(nome) {
    document.cookie = nome + "=; Max-Age=-99999999; path=/";
    console.log(`Cookie rimosso: ${nome}`);
}
setCookies("username", "Pippo", 10);
getCookie("username");
deleteCookie("username");


//UTILIZZARE IL LOCALSTORAGE
//salvataggio nel local storage
function saveInLocalStorage(chiave, valore) {
    localStorage.setItem(chiave, valore);
    console.log(`Valore salvato nel local storage: ${chiave}=${valore}`);
}
//recupero valore nel local storage
function getValueFromLocalStorage(chiave) {
    const valore = localStorage.getItem(chiave);
    if (valore !== null) {
        console.log(`Valore recuerato da local storage: ${chiave}=${valore}`);
    } else {
        console.log("Nessun valore trovato");
    }
    return valore;
}
//rimozione valore dal local storage
function remuveValureFromLocalStorage(chiave) {
    localStorage.removeItem(chiave);
    console.log("Valore rimosso");
}
saveInLocalStorage("username", "Qwerty");
getValueFromLocalStorage("username");
remuveValureFromLocalStorage("username");


//UTILIZZARE IL SESSIONSTORAGE
//salvataggio nel session storage
function saveInSessionStorage(chiave, valore) {
    sessionStorage.setItem(chiave, valore);
    console.log(`Valore salvato nel session storage: ${chiave}=${valore}`);
}
//recupero valore nel session storage
function getValueFromSessionStorage(chiave) {
    const valore = sessionStorage.getItem(chiave);
    if (valore !== null) {
        console.log(`Valore recuperato da session storage: ${chiave}=${valore}`);
    } else {
        console.log("Nessun valore trovato");
    }
    return valore;
}
//rimozione valore dal session storage
function remuveValureFromSessionStorage(chiave) {
    sessionStorage.removeItem(chiave);
    console.log("Valore rimosso");
}
saveInSessionStorage("username", "Qwerty");
getValueFromSessionStorage("username");
remuveValureFromSessionStorage("username");


//UTILIZZARE LOCALSTORAGE E SESSIONSTORAGE INSIEME
//per salvare i valori
function saveValue(storage, chiave, valore) {
    storage.setItem(chiave, valore);
    console.log(`Valore salvato in ${storage === localStorage ? 'localStorage' : 'sessionSTorage'}:${key}=${value}`);
}
//per recuperare i valori
function recoverValue(storage, chiave) {
    const valore = storage.getItem(chiave);
    console.log(`Valore recuperato da ${storage === localStorage ? 'localStorage' : 'sessionSTorage'}:${key}=${value}`);
    return valore;
}
//per rimuovere il valore
function remuveValue(storage, chiave) {
    storage.removeItem(chiave);
    console.log(`Valore rimosso da ${storage === localStorage ? 'localStorage' : 'sessionSTorage'}:${key}`);
}
saveValue(localStorage, "nome", "Pippo");
saveValue(sessionStorage, "cognome", "Rossi");
recoverValue(localStorage, "nome");
recoverValue(sessionStorage, "cognome");
remuveValue(localStorage, "nome");
remuveValue(sessionStorage, "cognome");
recoverValue(localStorage, "nome");
recoverValue(sessionStorage, "cognome");


//OGGETTO DOCUMENT
console.log("Dom della pagina ", document);