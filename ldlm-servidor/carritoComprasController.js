const { Pool } = require('pg');

// Configura la conexión a la base de datos PostgreSQL
const pool = new Pool({
  user: 'luz_leon',
  host: 'localhost',
  database: 'tienda_ldlm',
  password: '123456789',
  port: 5432,
});

// Función para obtener todos los elementos del carrito de compras
const obtenerElementosCarrito = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM carrito_compras');
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener elementos del carrito de compras:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Función para agregar un elemento al carrito de compras
const agregarElementoCarrito = async (req, res) => {
  const { usuario_id, producto_id, cantidad } = req.body;
  try {
    const { rows } = await pool.query('INSERT INTO carrito_compras (usuario_id, producto_id, cantidad) VALUES ($1, $2, $3) RETURNING *', [usuario_id, producto_id, cantidad]);
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error('Error al agregar elemento al carrito de compras:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Función para eliminar un elemento del carrito de compras
const eliminarElementoCarrito = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query('DELETE FROM carrito_compras WHERE id = $1 RETURNING *', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Elemento del carrito de compras no encontrado' });
    }
    res.json({ message: 'Elemento del carrito de compras eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar elemento del carrito de compras:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = {
  obtenerElementosCarrito,
  agregarElementoCarrito,
  eliminarElementoCarrito,
};
