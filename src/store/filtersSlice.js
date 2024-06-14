import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  filteredProducts: [],

  categories: [],
  companies: [],
  colors: [],

  company: "all",
  category: "all",
  color: "all",
  minPrice: 0,
  maxPrice: 0,
};
console.log(initialState.filteredProducts);

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addAllProducts: (state, action) => {
      state.allProducts = action.payload;
      state.filteredProducts = action.payload;

      state.categories = [
        ...new Set(action.payload.map((product) => product.category)),
      ];
      state.companies = [
        ...new Set(action.payload.map((product) => product.company)),
      ];
      state.colors = [
        ...new Set([...action.payload.map((product) => product.colors)].flat()),
      ];

      state.minPrice = action.payload.reduce((acc, product) => {
        if (acc === null || product.price < acc) return product.price;
        return acc;
      }, null);

      state.maxPrice = action.payload.reduce((acc, product) => {
        if (acc === null || product.price > acc) return product.price;
        return acc;
      }, null);
    },

    updateFilters: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
  },
});

export const { addAllProducts, updateFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
