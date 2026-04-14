const initialState = {
  items: []
};

// Add item to cart
export const addItem = (state, item) => {
  state.items.push(item);
};

// Remove item from cart
export const removeItem = (state, id) => {
  state.items = state.items.filter(item => item.id !== id);
};

// Update quantity
export const updateQuantity = (state, id, quantity) => {
  const item = state.items.find(item => item.id === id);
  if (item) {
    item.quantity = quantity;
  }
};

export default initialState;
