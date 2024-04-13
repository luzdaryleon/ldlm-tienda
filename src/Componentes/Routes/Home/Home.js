import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para enlaces internos
import fondo1 from '/Users/Usuario/Desktop/ldlm-tienda/ldlm-tienda/src/Componentes/ImageAssets/fondo1.jpg'; // Importa la imagen de fondo
import './Home.css';

const Home = () => {
  return (
    <div className="home-container" style={{ backgroundImage: `url(${fondo1})` }}>
      <h1>Bienvenido a la Tienda en Línea de LDLM</h1>
      <h2>Explora nuestra amplia selección de productos</h2>
     
      <div className="button-container">
        <Link to="/login" className="access-button">Iniciar Sesión</Link>
        <Link to="/register" className="access-button">Registrarse</Link>
        <Link to="/categories" className="access-button">Ver Cursos</Link>
        
        {/* Agrega más enlaces según tus necesidades */}
      </div>
    </div>
  );
}

export default Home;
