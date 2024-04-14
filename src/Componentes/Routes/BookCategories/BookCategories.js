import React from 'react';
import { Link } from 'react-router-dom';

const BookCategories = () => {
  const products = [
    { title: "Curso de Español Básico", description: "Aprende los fundamentos del idioma español.", price: "$50.00" },
    { title: "Libro de Gramática Avanzada", description: "Una guía completa de gramática española para usuarios avanzados.", price: "$35.00" },
    { title: "Diccionario de la Real Academia Española", description: "La edición oficial del diccionario de la Real Academia Española.", price: "$40.00" },
    { title: "Novela Clásica: Don Quijote de la Mancha", description: "Una de las obras maestras de la literatura española.", price: "$25.00" },
    { title: "Curso de Conversación en Español", description: "Mejora tus habilidades de conversación en español con este curso interactivo.", price: "$60.00" },
    { title: "Libro de Ejercicios de Gramática", description: "Practica y refuerza tus conocimientos de gramática española con este libro de ejercicios.", price: "$30.00" },
    { title: "Colección de Poesía Española", description: "Una selección de los mejores poemas de la literatura española.", price: "$45.00" },
    { title: "Curso de Español para Negocios", description: "Aprende vocabulario y expresiones útiles para comunicarte en el ámbito empresarial.", price: "$55.00" },
    { title: "Diccionario Bilingüe Inglés-Español", description: "Una herramienta indispensable para estudiantes y profesionales que necesitan traducir entre inglés y español.", price: "$20.00" },
    { title: "Curso de Preparación para el DELE", description: "Prepárate para el examen oficial de español DELE con este curso completo.", price: "$65.00" },
  ];

  const handleAddToCart = (product) => {
    // Lógica para agregar el producto al carrito de compras
    console.log(`Producto agregado al carrito: ${product.title}`);
  };

  return (
    <div>
      <h2>Categorías de Libros</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>Precio: {product.price}</p>
              <button onClick={() => handleAddToCart(product)}>Agregar al carrito</button>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/" className="access-button">Inicio</Link>
    </div>
  );
}

export default BookCategories;
