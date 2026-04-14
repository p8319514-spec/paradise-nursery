import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const products = [
  { id: 1, name: "Aloe Vera", price: 10 },
  { id: 2, name: "Snake Plant", price: 15 },
  { id: 3, name: "Peace Lily", price: 20 }
];

function ProductList() {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h2>Products</h2>

      {products.map(p => (
        <div key={p.id} style={{ border: "1px solid gray", margin: "10px" }}>
          <h3>{p.name}</h3>
          <p>${p.price}</p>
          <button onClick={() => addToCart(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
