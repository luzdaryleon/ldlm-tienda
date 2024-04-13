import React, { useState, useEffect } from 'react';
import './App.css';
import Routes from './Componentes/Routes/Routes';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/productos'); // Cambia la URL según tus rutas de la API
        setData(response.data);
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }
    };

    // Llamar a la función para obtener datos cuando el componente se monte
    fetchData();
  }, []); // El segundo argumento [] indica que este efecto se ejecuta solo una vez al montar el componente

 return (
    <div>
      <h1>Productos:</h1>
      <ul>
        {data.map((producto) => (
          <li key={producto.id}>{producto.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
