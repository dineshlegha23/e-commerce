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
      console.log(state, action);
    },

    setCartAmount: (state, action) => {
      const { payload } = action.payload;
      const currentItem = state.cartItems.find((item) => item.id === payload);

      console.log(currentItem);

      if (action.payload.type === "decrease") {
        // if (currentItem.amount > 0) {
        currentItem.amount = currentItem.amount - 1;
        // console.log("dd");
        console.log(currentItem.amount);
        // console.log(currentItem);
        // }
      }
      if (action.payload.type === "increase") {
        // if (currentItem.amount + 1 > stock) {
        // return;
        // } else {
        currentItem.amount = currentItem.amount + 1;
        // console.log("in");
        console.log(currentItem.amount);
      }
    },
  },
});

export const { addToCart, removeFromCart, setCartAmount } = cartSlice.actions;
export default cartSlice.reducer;
