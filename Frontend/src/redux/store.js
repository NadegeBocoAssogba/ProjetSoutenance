import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import { loadCartFromLocalStorage } from "../utils/localStorage";

const preloadedState = {
  cart: loadCartFromLocalStorage(),
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
});
