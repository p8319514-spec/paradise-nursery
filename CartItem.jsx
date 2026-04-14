import React, { useState } from "react";

function CartItem() {
  const [cart, setCart] = useState([
    { id: 1, name: "Aloe Vera", price: 10, quantity: 1 }
  ]);

  const updateQty = (id, qty) => {
    setCart(
      cart.map(item =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cart.map(item => (
        <div key={item.id} style={{ margin: "10px" }}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>

          <input
            type="number"
            value={item.quantity}
            min="1"
            onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
          />

          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}

      <h3>Total: ${total}</h3>
    </div>
  );
}

export default CartItem;
