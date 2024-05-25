import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, color, image, amount, price } = action.payload;

      const isItemPresent = state.cartItems.find(
        (item) => item.id === id + color
      );

      if (isItemPresent) {
        isItemPresent.amount = amount;
        isItemPresent.color = color;
        isItemPresent.subTotal = amount * price;
      } else {
        state.cartItems.push({
          id: id + color,
          color,
          image,
          amount,
          subTotal: amount * price,
        });
      }
    },

    removeFromCart: (state, action) => {
      console.log(state, action);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
