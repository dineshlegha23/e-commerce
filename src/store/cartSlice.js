import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, color, image, amount, price, name, stock } = action.payload;

      const isItemPresent = state.cartItems.find(
        (item) => item.id === id + color
      );

      if (isItemPresent) {
        isItemPresent.name = name;
        isItemPresent.amount = amount;
        isItemPresent.color = color;
        isItemPresent.price = price;
        isItemPresent.stock = stock;
        isItemPresent.subTotal = amount * price;
      } else {
        state.cartItems.push({
          id: id + color,
          name,
          color,
          image,
          amount,
          price,
          stock,
          subTotal: amount * price,
        });
      }
    },

    removeFromCart: (state, action) => {
      const { id } = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },

    setCartAmount: (state, action) => {
      const { type, id } = action.payload;
      const currentItem = state.cartItems.find((item) => item.id === id);

      if (type === "decrease") {
        currentItem.amount = currentItem.amount - 1;
      }
      if (type === "increase") {
        currentItem.amount = currentItem.amount + 1;
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, setCartAmount, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
