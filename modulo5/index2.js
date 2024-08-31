//AUTOMOBILE
class Automobile {
    marca = "";
    modello = "";
    anno = 0;

    //AGGIUNGI METODI & PROPRIETA'
    chilometraggio = 0;

    //CONTATORE
    #contatoreChiamate = 0;

    constructor(marca, modello, anno, chilometraggio) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
        this.#contatoreChiamate = 0;
    }
    descrizione() {
        return `Automobile: ${this.marca} ${this.modello} ${this.anno}.`;
    }

    //AGGIUNGI METODI & PROPRIETA'
    aggiungiChilometri(km) {
        if (km > 0) {
            this.chilometraggio += km;
            this.#incrementaContatore();
        } else {
            console.log("Inserire valore positivo");
        }
    }
    mostraChilometraggio() {
        return `Automobile: ${this.chilometraggio} km`;
    }

    //METODO PRIVATO
    #calcolaEta() {
        const annoOggi = new Date().getFullYear();
        return annoOggi - this.anno;
    }
    mostraEta() {
        return `età dell'auto: ${this.#calcolaEta()}`;
    }

    //METODO PROTEtTO
    protetto_controllaChilometri() {
        if (this.chilometraggio > 100000) {
            console.log("Superato limite di chilometraggio");
        }
    }

    //CONFRONTA KM
    static confrontaChilometraggio(auto1, auto2) {
        if (auto1.chilometraggio > auto2.chilometraggio) {
            return `La ${auto1.marca} ${auto1.modello} ha il chilometraggio maggiore`;
        } else if (auto1.chilometraggio < auto2.chilometraggio) {
            return `La ${auto2.marca} ${auto2.modello} ha il chilometraggio maggiore`;
        } else {
            return `Le due auto hanno lo stesso chilometraggio`;
        }
    }

    //INCREMENTA CONTATORE
    #incrementaContatore() {
        this.#contatoreChiamate++;
    }

    //MOSTRA CONTATORE
    mostraContatoreChiamate() {
        return `Numero di chiamate di aggiungiChilometri: ${this.#contatoreChiamate}`;
    }

    //GETTER
    get chilometraggioAttuale() {
        return this.chilometraggio;
    }

    //SETTER
    set chilometraggio(val) {
        if (val >= this.chilometraggio) {
            this.chilometraggio = val;
        } else {
            console.log("Inserire un nuovo valore maggiore del valore corente");
        }
    }
}

//SOTTOCLASSE ELETTRICA
class Elettrica extends Automobile {
    autonomia = 0;


    constructor(marca, modello, anno, autonomia) {
        super(marca, modello, anno);
        this.autonomia = autonomia;
    }

    descrizione() {
        return `Automobile: ${this.marca} ${this.modello} ${this.anno} ${this.autonomia}`;
    }

    ricarica(km) {
        if (km > 0) {
            this.autonomia += km;
        } else {
            console.log("Inserire valore positivo");
        }
    }

    //METODO PROTETTO
    protetto_controllaChilometri() {
        super.protetto_controllaChilometri();
    }


}

//CAMION
class Camion extends Automobile {
    constructor(marca, modello, anno) {
        super(marca, modello, anno);
    }

    descrizione() {
        return `Camion: ${this.marca} ${this.modello} ${this.anno}`;
    }
}

//SALUTA
Automobile.prototype.saluta = function () {
    return `Sono l'auto ${this.marca} ${this.modello}.`;
}


//AUTOMOBILE
const miaAuto = new Automobile("Opel", "Corsa", 2022);
console.log(miaAuto.descrizione);

//AGGIUNGI METODI & PROPRIETA'
miaAuto.aggiungiChilometri(10);
console.log(miaAuto.mostraChilometraggio());

//SOTTOCLASSE ELETTRICA
const autoElettrica = new Automobile("Tesla", "Model 2", 2023, 550);
console.log(autoElettrica.descrizione());

//SALUTA
console.log(autoElettrica.saluta);

//METODO PRIVATO
console.log(miaAuto.mostraEta());

//METODO PROTETTO
autoElettrica.aggiungiChilometri(95000);
console.log(autoElettrica.mostraChilometraggio());
autoElettrica.aggiungiChilometri(10000);
console.log(autoElettrica.mostraChilometraggio());

//CONFRONTA KM
const auto1 = new Automobile("Ford", "Focus", 2011);
const auto2 = new Automobile("Fiat", "Punto", 2010);
auto1.aggiungiChilometri(300000);
auto2.aggiungiChilometri(200000);
console.log(Automobile.confrontaChilometraggio(auto1, auto2));

//MOSTRA CONTATORE
console.log(miaAuto.mostraContatoreChiamate());

//GETTER
console.log(`Chilometraggio attuale: ${miaAuto.chilometraggioAttuale} km`);

//SETTER
console.log("Impostato chilometraggio a 20 km:");
miaAuto.chilometraggio = 20;
console.log(miaAuto.mostraChilometraggio());

//CAMION
const mioCamion = new Camion("Iveco", "Boh", 2022);
console.log(miaAuto.descrizione);