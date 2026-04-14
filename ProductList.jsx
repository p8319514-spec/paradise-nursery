import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./redux/cartSlice";

const plantsArray = [
  {
    category: "Indoor Plants",
    plants: [
      { id: 1, name: "Aloe Vera", price: 10, img: "https://via.placeholder.com/100" },
      { id: 2, name: "Snake Plant", price: 15, img: "https://via.placeholder.com/100" },
      { id: 3, name: "Peace Lily", price: 20, img: "https://via.placeholder.com/100" },
      { id: 4, name: "Spider Plant", price: 12, img: "https://via.placeholder.com/100" },
      { id: 5, name: "Money Plant", price: 18, img: "https://via.placeholder.com/100" },
      { id: 6, name: "Fern", price: 14, img: "https://via.placeholder.com/100" }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>

      {plantsArray.map(category => (
        <div key={category.category}>
          <h3>{category.category}</h3>

          {category.plants.map(plant => (
            <div key={plant.id} style={{ margin: "10px" }}>
              <img src={plant.img} alt="" />
              <h4>{plant.name}</h4>
              <p>${plant.price}</p>

              <button onClick={() => dispatch(addItem(plant))}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
