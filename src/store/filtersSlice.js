import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialState = {
  allProducts: [],
  filteredProducts: [],

  categories: [],
  companies: [],
  colors: [],

  text: "",
  company: "all",
  category: "all",
  color: "all",
  price: 0,
  minPrice: 0,
  maxPrice: 0,
  isShippingFree: false,
};
console.log(initialState.isShipping);

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addAllProducts: (state, action) => {
      state.allProducts = action.payload;
      state.filteredProducts =
        state.filteredProducts.length > 0
          ? state.filteredProducts
          : action.payload;

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

      state.price = state.maxPrice;
    },

    updateFilters: (state, action) => {
      if (action.payload.name === "isShippingFree") {
        state["isShippingFree"] = !state.isShippingFree;
      } else {
        state[action.payload.name] = action.payload.value;
      }
      const { company, color, category, isShippingFree, price } = state;

      let temp = [...state.allProducts];

      if (category !== "all") {
        temp = temp.filter((product) => product.category === category);
      }

      if (company !== "all") {
        temp = temp.filter((product) => product?.company?.startsWith(company));
      }

      if (color !== "all") {
        temp = temp.filter((product) =>
          product.colors.find((currentColor) => currentColor === color)
        );
      }

      if (price) {
        temp = temp.filter((product) => product.price <= price);
      }

      if (isShippingFree === true) {
        temp = temp.filter((product) => product.shipping === true);
      }

      state.filteredProducts = temp;
    },

    clearFilters: (state, action) => {
      state.filteredProducts = state.allProducts;
      state.color = "all";
      state.category = "all";
      state.color = "all";
      state.price = state.maxPrice;
      state.text = "";
      state.isShippingFree = false;
    },
  },
});

export const { addAllProducts, updateFilters, clearFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;
