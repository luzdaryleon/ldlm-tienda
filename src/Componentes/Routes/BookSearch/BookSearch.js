import React, { useState } from 'react';
import './BookSearch.css';

const BookSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para realizar la búsqueda de libros
    // Puedes llamar a una API externa o realizar la búsqueda en una base de datos interna
    // Por ahora, simplemente mostraremos el término de búsqueda en la consola
    console.log('Realizar búsqueda con el término:', searchTerm);
    // Limpia el campo de búsqueda después de enviar el formulario
    setSearchTerm('');
  };

  return (
    <div className="book-search">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Buscar libros..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Buscar</button>
      </form>
      {/* Aquí puedes mostrar los resultados de la búsqueda */}
      {/* Por ahora, simplemente mostraremos el término de búsqueda */}
      <div className="search-results">
        Resultados de búsqueda para: {searchTerm}
      </div>
    </div>
  );
};

export default BookSearch;
