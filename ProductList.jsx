import React from "react";

const products = [
  { id: 1, name: "Aloe Vera", price: 10 },
  { id: 2, name: "Snake Plant", price: 15 },
  { id: 3, name: "Peace Lily", price: 20 }
];

function ProductList() {
  const handleAddToCart = (product) => {
    alert(`${product.name} added to cart`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Plant Products</h2>

      {products.map((product) => (
        <div key={product.id} style={{ margin: "10px", padding: "10px", border: "1px solid gray" }}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>

          <button onClick={() => handleAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
