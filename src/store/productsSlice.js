import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  minPrice: 0,
  maxPrice: 1,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.allProducts = action.payload;

      state.minPrice = action.payload.reduce((acc, product) => {
        if (acc === null || product.price < acc) return product.price;
        return acc;
      }, null);

      state.maxPrice = action.payload.reduce((acc, product) => {
        if (acc === null || product.price > acc) return product.price;
        return acc;
      }, null);
    },
  },
});

export const { addProducts } = productsSlice.actions;
export default productsSlice.reducer;
