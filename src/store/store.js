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
} from "./cartSlice";

const localStorageMiddleware = createListenerMiddleware();

localStorageMiddleware.startListening({
  matcher: isAnyOf(addToCart, removeFromCart, setCartAmount),
  effect: (action, listenerApi) =>
    localStorage.setItem(
      "cartItems",
      JSON.stringify(listenerApi.getState().cart.cartItems)
    ),
});

export const store = configureStore({
  reducer: { products: productsReducer, cart: cartReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(localStorageMiddleware.middleware),
});
