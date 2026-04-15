import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const plantData = [
  {
    category: "Indoor Plants",
    plants: [
      { id: 1, name: "Aloe Vera", price: 10, image: "https://via.placeholder.com/100" },
      { id: 2, name: "Snake Plant", price: 15, image: "https://via.placeholder.com/100" },
      { id: 3, name: "Peace Lily", price: 20, image: "https://via.placeholder.com/100" },
    ],
  },
  {
    category: "Outdoor Plants",
    plants: [
      { id: 4, name: "Rose", price: 12, image: "https://via.placeholder.com/100" },
      { id: 5, name: "Tulip", price: 18, image: "https://via.placeholder.com/100" },
      { id: 6, name: "Sunflower", price: 14, image: "https://via.placeholder.com/100" },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems([...addedItems, plant.id]);
  };

  return (
    <div>
      <h2>Plant Categories</h2>

      {plantData.map((category, index) => (
        <div key={index}>
          <h3>{category.category}</h3>

          {category.plants.map((plant) => (
            <div key={plant.id}>
              <img src={plant.image} alt={plant.name} />
              <h4>{plant.name}</h4>
              <p>${plant.price}</p>

              <button
                onClick={() => handleAddToCart(plant)}
                disabled={addedItems.includes(plant.id)}
              >
                {addedItems.includes(plant.id) ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
