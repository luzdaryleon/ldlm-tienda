import React, { useState } from 'react';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const [items, setItems] = useState([]);

  // Función para eliminar un elemento del carrito
  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  // Función para vaciar el carrito
  const handleClearCart = () => {
    setItems([]);
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your shopping cart is empty.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <span>{item.name}</span>
              <span>{item.price}</span>
              <button onClick={() => handleRemoveItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {items.length > 0 && (
        <button onClick={handleClearCart}>Clear Cart</button>
      )}
    </div>
  );
}

export default ShoppingCart;
