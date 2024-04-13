import React from 'react';
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <div>
      <h1>Bienvenido a la Aplicación</h1>
      <p>Presiona el siguiente botón para ir a la página principal:</p>
      <Link to="/home">
        <button>Ir a la Página Principal</button>
      </Link>
    </div>
  );
}

export default Inicio;
