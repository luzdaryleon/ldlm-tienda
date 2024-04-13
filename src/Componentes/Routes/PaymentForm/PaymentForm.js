import React, { useState } from 'react';
import './PaymentForm.css';

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [error, setError] = useState('');

  const handlePayment = () => {
    // Aquí puedes agregar la lógica para procesar el pago
    // Por ahora, simplemente mostraré un mensaje de error si algún campo está vacío
    if (!cardNumber || !expirationDate || !cvv) {
      setError('Por favor, ingresa la información de tu tarjeta de crédito.');
      return;
    }

    // Aquí puedes enviar la información de la tarjeta al servidor para procesar el pago
    // Luego puedes mostrar un mensaje de éxito o error dependiendo del resultado
  };

  return (
    <div className="payment-form">
      <h2>Payment Form</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handlePayment}>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="expirationDate">Expiration Date:</label>
          <input
            type="text"
            id="expirationDate"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}

export default PaymentForm;
