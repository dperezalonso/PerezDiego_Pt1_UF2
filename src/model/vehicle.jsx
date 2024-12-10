export class Vehicle{
    constructor (marca, model, anyFabricacio, rodes, tipusCombustible){
        this.marca = marca
        this.model = model
        this.anyFabricacio = anyFabricacio
        this.rodes = rodes
        this.tipusCombustible = tipusCombustible
    }
}

export class Cotxe extends Vehicle {
    constructor(marca, model, anyFabricacio, rodes, tipusCombustible, nombrePortes) {
        super(marca, model, anyFabricacio, rodes, tipusCombustible);
        this.nombrePortes = nombrePortes;
    }
}

export class Moto extends Vehicle {
    constructor(marca, model, anyFabricacio, rodes, tipusCombustible, cilindrada) {
        super(marca, model, anyFabricacio, rodes, tipusCombustible);
        this.cilindrada = cilindrada;
    }
}


export default {Vehicle, Cotxe, Moto};