import React from 'react';
import './BookDetail.css';

const BookDetail = () => {
  return (
    <div className="book-detail">
      <h2>Detalles del Libro</h2>
      <p>Título: Nombre del Libro</p>
      <p>Autor: Nombre del Autor</p>
      <p>Año de Publicación: 2022</p>
      <p>Descripción: Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      {/* Agrega más detalles del libro aquí */}
    </div>
  );
}

export default BookDetail;
