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