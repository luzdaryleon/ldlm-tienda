const { Pool } = require('pg');

// Configura la conexión a la base de datos PostgreSQL
const pool = new Pool({
  user: 'luz_leon',
  host: 'localhost',
  database: 'tienda_ldlm',
  password: '123456789',
  port: 5432,
});

// Función para obtener todas las órdenes
const obtenerOrdenes = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM ordenes');
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener órdenes:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Función para obtener una orden por su ID
const obtenerOrdenPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query('SELECT * FROM ordenes WHERE id = $1', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Orden no encontrada' });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error('Error al obtener la orden:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Función para crear una nueva orden
const crearOrden = async (req, res) => {
  const { usuario_id, producto_id, cantidad } = req.body;
  try {
    const { rows } = await pool.query('INSERT INTO ordenes (usuario_id, producto_id, cantidad) VALUES ($1, $2, $3) RETURNING *', [usuario_id, producto_id, cantidad]);
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error('Error al crear la orden:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Función para eliminar una orden
const eliminarOrden = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query('DELETE FROM ordenes WHERE id = $1 RETURNING *', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Orden no encontrada' });
    }
    res.json({ message: 'Orden eliminada correctamente' });
  } catch (error) {
    console.error('Error al eliminar la orden:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = {
  obtenerOrdenes,
  obtenerOrdenPorId,
  crearOrden,
  eliminarOrden,
};
