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
    }

    //AGGIUNGI METODI & PROPRIETA'
    aggiungiChilometri(km) {
        if (km > 0) {
            this.chilometraggio += km;
        } else {
            console.log("Inserire valore positivo");
        }
    }
}

//AUTOMOBILE
const miaAuto = new Automobile("Opel", "Corsa", 2022);
console.log(miaAuto.destrizione);

//AGGIUNGI METODI & PROPRIETA'
miaAuto.aggiungiChilometri(10);