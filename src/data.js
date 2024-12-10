import { Vehicle,Moto,Cotxe } from "./model/vehicle";

// Create vehicle instances
const vehicles = [
    new Cotxe('Toyota', 'Corolla', 2020, 4, 'Gasolina', 4),
    new Cotxe('Honda', 'Civic', 2021, 4, 'Híbrid', 4),
    new Cotxe('Tesla', 'Model 3', 2023, 4, 'Elèctric', 4),

    new Moto('Yamaha', 'R1', 2022, 2, 'Gasolina', 998),
    new Moto('Harley', 'Street 750', 2019, 2, 'Gasolina', 750),
    
    new Vehicle('Ford', 'F-150', 2021, 4, 'Dièsel'),
    new Vehicle('Trek', 'Marlin 7', 2023, 2, 'No Aplicable'),
    
];


export default vehicles;
