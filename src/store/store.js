import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import cartReducer, {
  addToCart,
  removeFromCart,
  setCartAmount,
  clearCart,
} from "./cartSlice";
import filtersReducer from "./filtersSlice";
import authSlice from "./authSlice";
import { productsApiSlice } from "./api/productsApiSlice";

const localStorageMiddleware = createListenerMiddleware();

localStorageMiddleware.startListening({
  matcher: isAnyOf(addToCart, removeFromCart, setCartAmount, clearCart),
  effect: (action, listenerApi) =>
    localStorage.setItem(
      "cartItems",
      JSON.stringify(listenerApi.getState().cart.cartItems)
    ),
});

export const store = configureStore({
  reducer: {
    [productsApiSlice.reducerPath]: productsApiSlice.reducer,
    products: productsReducer,
    cart: cartReducer,
    filters: filtersReducer,
    auth: authSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApiSlice.middleware)
      .prepend(localStorageMiddleware.middleware),
});
