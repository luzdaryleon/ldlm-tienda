const express = require('express');
const pg = require('pg');
const cors = require('cors');
const productosController = require('./productosController'); // Importa los controladores de productos

const app = express();
const PORT = process.env.PORT || 4000;

// Configura CORS
app.use(cors());
app.use(express.json()); // Permite el análisis del cuerpo de las solicitudes en formato JSON

// Configura la conexión a la base de datos PostgreSQL
const pool = new pg.Pool({
  user: 'luz_leon',
  host: 'localhost',
  database: 'tienda_ldlm',
  password: '123456789',
  port: 5432,
});

// Rutas para productos
app.get('/api/productos', productosController.obtenerProductos); // Obtener todos los productos
app.get('/api/productos/:id', productosController.obtenerProductoPorId); // Obtener un producto por su ID
app.post('/api/productos', productosController.crearProducto); // Crear un nuevo producto
app.put('/api/productos/:id', productosController.actualizarProducto); // Actualizar un producto existente
app.delete('/api/productos/:id', productosController.eliminarProducto); // Eliminar un producto existente

// Manejador de errores para rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

// Manejador de errores global
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Error interno del servidor' });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor Node.js iniciado en el puerto ${PORT}`);
});
