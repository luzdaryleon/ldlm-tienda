import React from 'react';
import './LiteratureBooks.css'; // Importa el archivo CSS aquí

const LiteratureBooks = () => {
  return (
    <div className="literature-books-container">
      <h2 className="literature-books-title">Literature Books</h2>
      <ul className="literature-books-list">
        <li className="literature-books-item">Book 1</li>
        <li className="literature-books-item">Book 2</li>
        <li className="literature-books-item">Book 3</li>
         <Link to="/" className="access-button">Inicio</Link>
      </ul>
    </div>
  );
}

export default LiteratureBooks;
