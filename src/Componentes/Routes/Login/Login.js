import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Aquí puedes agregar la lógica para verificar las credenciales
    // Por ahora, simplemente mostraré un mensaje de error si el usuario o la contraseña están vacíos
    if (!username || !password) {
      setError('Por favor, ingresa un nombre de usuario y una contraseña válidos.');
      return;
    }

    // Aquí puedes enviar las credenciales al servidor para autenticar al usuario
    // Luego puedes redirigir al usuario a la página principal o a otro destino
  };

  return (
    <div className="login">
      <h2>Iniciar Sesión</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Nombre de Usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login;
