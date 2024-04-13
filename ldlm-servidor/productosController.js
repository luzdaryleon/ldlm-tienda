const { Pool } = require('pg');

// Configura la conexión a la base de datos PostgreSQL
const pool = new Pool({
  user: 'luz_leon',
  host: 'localhost',
  database: 'tienda_ldlm',
  password: '123456789',
  port: 5432,
});

// Función para obtener todos los productos
const obtenerProductos = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM productos');
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Función para obtener un producto por su ID
const obtenerProductoPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query('SELECT * FROM productos WHERE id = $1', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error('Error al obtener el producto:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Función para crear un nuevo producto
const crearProducto = async (req, res) => {
  const { nombre, precio } = req.body;
  try {
    const { rows } = await pool.query('INSERT INTO productos (nombre, precio) VALUES ($1, $2) RETURNING *', [nombre, precio]);
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error('Error al crear el producto:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Función para actualizar un producto existente
const actualizarProducto = async (req, res) => {
  const { id } = req.params;
  const { nombre, precio } = req.body;
  try {
    const { rows } = await pool.query('UPDATE productos SET nombre = $1, precio = $2 WHERE id = $3 RETURNING *', [nombre, precio, id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error('Error al actualizar el producto:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Función para eliminar un producto existente
const eliminarProducto = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query('DELETE FROM productos WHERE id = $1 RETURNING *', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar el producto:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = {
  obtenerProductos,
  obtenerProductoPorId,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
};
