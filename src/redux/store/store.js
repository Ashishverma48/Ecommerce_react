import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../feature/cart/CartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
