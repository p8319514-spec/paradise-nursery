import React, { useState } from "react";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div>
      {!showProducts ? (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
          <h1>Welcome to Paradise Nursery</h1>

          <button
            onClick={() => setShowProducts(true)}
            style={{ padding: "10px 20px", marginTop: "20px" }}
          >
            Get Started
          </button>
        </div>
      ) : (
        <>
          <ProductList />
          <CartItem />
        </>
      )}
    </div>
  );
}

export default App;
