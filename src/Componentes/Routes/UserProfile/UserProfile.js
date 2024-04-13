const express = require('express');
const pg = require('pg');
const cors = require('cors');
const productosController = require('./productosController');
const carritoComprasController = require('./carritoComprasController');
const ordenesController = require('./ordenesController');
const usuariosController = require('./usuariosController');

const app = express();
const PORT = process.env.PORT || 4000;

// Configura CORS
app.use(cors());
app.use(express.json());

// Configura la conexión a la base de datos PostgreSQL
const pool = new pg.Pool({
  user: 'luz_leon',
  host: 'localhost',
  database: 'tienda_ldlm',
  password: '123456789',
  port: 5432,
});

// Rutas para productos
app.get('/api/productos', productosController.obtenerProductos);
app.get('/api/productos/:id', productosController.obtenerProductoPorId);
app.post('/api/productos', productosController.crearProducto);
app.put('/api/productos/:id', productosController.actualizarProducto);
app.delete('/api/productos/:id', productosController.eliminarProducto);

// Rutas para carrito de compras
app.get('/api/carrito-compras', carritoComprasController.obtenerCarritoCompras);
app.get('/api/carrito-compras/:id', carritoComprasController.obtenerCarritoCompraPorId);
app.post('/api/carrito-compras', carritoComprasController.agregarAlCarrito);
app.delete('/api/carrito-compras/:id', carritoComprasController.eliminarDelCarrito);

// Rutas para órdenes
app.get('/api/ordenes', ordenesController.obtenerOrdenes);
app.get('/api/ordenes/:id', ordenesController.obtenerOrdenPorId);
app.post('/api/ordenes', ordenesController.crearOrden);
app.delete('/api/ordenes/:id', ordenesController.eliminarOrden);

// Rutas para usuarios
app.get('/api/usuarios', usuariosController.obtenerUsuarios);
app.get('/api/usuarios/:id', usuariosController.obtenerUsuarioPorId);
app.post('/api/usuarios', usuariosController.crearUsuario);
app.put('/api/usuarios/:id', usuariosController.actualizarUsuario);he
app.delete('/api/usuarios/:id', usuariosController.eliminarUsuario);

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
