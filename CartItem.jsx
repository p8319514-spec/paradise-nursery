import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, updateQuantity } from "./CartSlice";

function CartItem() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>

          {/* ✅ Individual item total */}
          <p>Total: ${item.price * item.quantity}</p>

          <button
            onClick={() =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  quantity: item.quantity + 1,
                })
              )
            }
          >
            +
          </button>

          <button
            onClick={() => {
              if (item.quantity === 1) {
                dispatch(removeItem(item.id)); // remove item
              } else {
                dispatch(
                  updateQuantity({
                    id: item.id,
                    quantity: item.quantity - 1,
                  })
                );
              }
            }}
          >
            -
          </button>
        </div>
      ))}

      {/* ✅ Total Cart Amount */}
      <h3>Total Amount: ${totalAmount}</h3>
    </div>
  );
}

export default CartItem;
