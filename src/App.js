import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [series, setSeries] = useState([
    'La casa de Papel',
    'El barco',
    'Iron Man',
  ]);
  const nuevasSeries = series.map(function (valor, posicion) {
    console.log(valor, posicion);
    return valor + posicion;
  });
  return (
    <div>
      <h1>Mis Series!</h1>
      <p>Total de series: {series.length}</p>
      <ul>
        <li>{series[0]}</li>
        <li>{series[1]}</li>
        <li>{series[2]}</li>
        <li>{nuevasSeries[0]}</li>
        <li>{nuevasSeries[1]}</li>
        <li>{nuevasSeries[2]}</li>
      </ul>
    </div>
  );
}
