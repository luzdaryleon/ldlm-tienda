import React from 'react';
import { Link } from 'react-router-dom';

const BookCategories = () => {
  return (
    <div>
      <h2>Categorías de Libros</h2>
      <ul>
        <li><Link to="/courses/spanish">Cursos de Español</Link></li>
        <li><Link to="/courses/grammar">Cursos de Gramática</Link></li>
        <li><Link to="/courses/literature">Cursos de Literatura</Link></li>
        <Link to="/" className="access-button">Inicio</Link>
      </ul>
    </div>
  );
}

export default BookCategories;
