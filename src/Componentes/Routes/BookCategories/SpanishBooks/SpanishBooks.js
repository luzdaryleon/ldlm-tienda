import React from 'react';
import './SpanishBooks.css'; // Importa el archivo CSS aquí

const SpanishBooks = () => {
  return (
    <div className="spanish-books-container">
      <h2 className="spanish-books-title">Spanish Books</h2>
      <ul className="spanish-books-list">
        <li className="spanish-books-item">Book 1</li>
        <li className="spanish-books-item">Book 2</li>
        <li className="spanish-books-item">Book 3</li>
         <Link to="/" className="access-button">Inicio</Link>
      </ul>
    </div>
  );
}

export default SpanishBooks;
