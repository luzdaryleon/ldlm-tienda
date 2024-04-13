/* Header.js */

import React from "react";
import { Link } from "react-router-dom"; // Importa Link para enlaces internos
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-container">
        <h1 className="logo">LDLm Tienda</h1>
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/categories">Categorías</Link>
          </li>
          <li>
            <Link to="/cart">Carrito</Link>
          </li>
          <li>
            <Link to="/profile">Perfil</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
