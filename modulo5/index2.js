//AUTOMOBILE
class Automobile {
    marca = "";
    modello = "";
    anno = ;
    constructor(marca, modello, anno) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
    }
    destrizione() {
        return `Automobile: ${this.marca} ${this.modello} ${this.anno}`;
    }
}

//AUTOMOBILE
const miaAuto = new Automobile("Opel", "Corsa", 2022);
console.log(miaAuto.destrizione);