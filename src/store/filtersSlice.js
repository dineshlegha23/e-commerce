import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: [],
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {},
});

export const {} = filtersSlice.actions;
export default filtersSlice.reducer;
