import React from 'react';
import './GrammarBooks.css'; // Importa el archivo CSS aquí

const GrammarBooks = () => {
  return (
    <div className="grammar-books-container">
      <h2 className="grammar-books-title">Grammar Books</h2>
      <ul className="grammar-books-list">
        <li className="grammar-books-item">Book 1</li>
        <li className="grammar-books-item">Book 2</li>
        <li className="grammar-books-item">Book 3</li>
         <Link to="/" className="access-button">Inicio</Link>
      </ul>
    </div>
  );
}

export default GrammarBooks;
