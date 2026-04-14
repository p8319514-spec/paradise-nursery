import React, { useState } from "react";

function ProductList() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Aloe Vera", price: 10 },
    { id: 2, name: "Snake Plant", price: 15 },
    { id: 3, name: "Peace Lily", price: 20 }
  ];

  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);

    if (exists) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🌱 Products</h2>

      {products.map(product => (
        <div
          key={product.id}
          style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}
        >
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>

          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}

      <h3>Cart Items: {cart.length}</h3>
    </div>
  );
}

export default ProductList;
