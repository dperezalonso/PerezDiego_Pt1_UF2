import React, { useState } from "react";
import { Taula } from "./Taula";
import vehicles from "../data";

export function Container() {
  const [titol, setTitol] = useState("Titol Llista");
  const [arrVehicles, setVehicles] = useState([...vehicles]);
  const [totalRodes, setTotalRodes] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAscending, setIsAscending] = useState(true);


  function canviTitol() {
    const tt = prompt("Nou titol:");
    if (tt) {
      setTitol(tt);
    }
  }

  function totalize() {
    let total = 0;
    arrVehicles.forEach(vehicle => {
      total += vehicle.rodes;
    });
    setTotalRodes(total);
    setIsVisible(!isVisible);
  }

  function ordenarPer(param) {
    const vehiclesOrdenats = [...arrVehicles].sort((a, b) => a[param] - b[param]);
    setVehicles(vehiclesOrdenats);
  }


  function ordenarPer(param) {
    const vehiclesOrdenats = [...arrVehicles].sort((a, b) =>
      isAscending ? a[param] - b[param] : b[param] - a[param]
    );
    setVehicles(vehiclesOrdenats);
    setIsAscending(!isAscending);
  }
  function filtrarPer(param) {
    const vehiclesFiltrats = vehicles.filter(vehicle => vehicle.tipusCombustible === param);
    setVehicles(vehiclesFiltrats);
  }

  return (
    <>
      <h1 onClick={canviTitol}>{titol}</h1>
      <button onClick={totalize}>Totalitzar</button>
      <button onClick={() => ordenarPer('anyFabricacio')} /*Canviant el param del metode podem filtrar 
      per un altre valor numeric*/ >
        Ordenar per any {isAscending ? '↓' : '↑'}
      </button>
      <button onClick={() => filtrarPer('Gasolina')}/*Canviant el param del metode podem filtrar
       per un altre tipus de combustible*/>Filtrar per Gasolina</button>
      <button onClick={() => setVehicles([...vehicles])}>Reiniciar Taula</button>
      <br />
      <Taula vehicles={arrVehicles} />
      <br />
      {isVisible && <p>Total Rodes: {totalRodes}</p>}
      <div className=""></div>
    </>
  );
}