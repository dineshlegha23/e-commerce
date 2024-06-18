import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myUser: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.myUser = action.payload;
    },
    removeUser: (state) => {
      state.myUser = null;
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
