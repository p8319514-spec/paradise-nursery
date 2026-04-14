import React from "react";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

function App() {
  return (
    <div>
      <header style={{ textAlign: "center", padding: "20px" }}>
        <h1>🌿 Paradise Nursery</h1>
        <p>Welcome to your plant shopping store</p>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px"
          }}
        >
          Get Started
        </button>
      </header>

      <hr />

      <ProductList />
      <CartItem />
    </div>
  );
}

export default App;
