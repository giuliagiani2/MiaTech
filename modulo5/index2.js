//AUTOMOBILE
class Automobile {
    marca = "";
    modello = "";
    anno = 0;

    //AGGIUNGI METODI & PROPRIETA'
    chilometraggio = 0;

    constructor(marca, modello, anno, chilometraggio) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
    }
    destrizione() {
        return `Automobile: ${this.marca} ${this.modello} ${this.anno}`;
        return `Automobile: ${this.marca} ${this.modello} ${this.anno} ${this.autonomia}`;
    }

    //AGGIUNGI METODI & PROPRIETA'
    aggiungiChilometri(km) {
        if (km > 0) {
            this.chilometraggio += km;
        } else {
            console.log("Inserire valore positivo");
        }
    }
    mostraChilometraggio() {
        return `Automobile: ${this.chilometraggio} km`;
    }

    ricarica(km) {
        if (km > 0) {
            this.autonomia += km;
        } else {
            console.log("Inserire valore positivo");
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
}


//SALUTA
Automobile.prototype.saluta = function () {
    return `Sono l'auto ${this.marca} ${this.modello}.`;
}


//AUTOMOBILE
const miaAuto = new Automobile("Opel", "Corsa", 2022);
console.log(miaAuto.destrizione);

//AGGIUNGI METODI & PROPRIETA'
miaAuto.aggiungiChilometri(10);
console.log(miaAuto.mostraChilometraggio());

//SOTTOCLASSE ELETTRICA
const autoElettrica = new Automobile("Tesla", "Model 2", 2023, 550);
console.log(autoElettrica.destrizione());

//SALUTA
console.log(autoElettrica.saluta);