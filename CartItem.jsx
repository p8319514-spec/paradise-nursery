import React, { useContext } from "react";
import { CartContext } from "./CartContext";

function CartItem() {
  const { cart, removeFromCart, updateQty } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Cart</h2>

      {cart.map(item => (
        <div key={item.id} style={{ margin: "10px" }}>
          <h3>{item.name}</h3>
          <p>${item.price}</p>

          <input
            type="number"
            value={item.quantity}
            min="1"
            onChange={(e) => updateQty(item.id, Number(e.target.value))}
          />

          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ${total}</h3>
    </div>
  );
}

export default CartItem;
