import React, { useState } from "react";
import ProductList from "./ProductList";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  const handleGetStarted = () => {
    setShowProducts(true);
  };

  return (
    <div>
      {!showProducts ? (
        <div className="landing">
          {/* ✅ EXACT TEXT REQUIRED */}
          <h1>Welcome to Paradise Nursery</h1>

          {/* ✅ CLASS NAME + FUNCTION */}
          <button className="get-started-btn" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
