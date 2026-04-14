import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./redux/cartSlice";

function CartItem() {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Cart</h2>

      {cart.map(item => (
        <div key={item.id}>
          <h4>{item.name}</h4>

          <button onClick={() =>
            dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
          }>
            -
          </button>

          {item.quantity}

          <button onClick={() =>
            dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
          }>
            +
          </button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ${total}</h3>

      <button>Checkout</button>
      <button onClick={() => window.location.reload()}>
        Continue Shopping
      </button>
    </div>
  );
}

export default CartItem;
