import React from 'react';
import './Checkout.css';

const Checkout = () => {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form className="checkout-form">
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="address">Dirección de envío:</label>
          <textarea id="address" name="address" rows="3"></textarea>
        </div>
        <div className="form-group">
          <button type="submit">Realizar pago</button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
