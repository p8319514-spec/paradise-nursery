import React from "react";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <CartProvider>
      <div style={{ textAlign: "center" }}>
        <h1>Paradise Nursery</h1>
        <ProductList />
        <CartItem />
      </div>
    </CartProvider>
  );
}

export default App;
