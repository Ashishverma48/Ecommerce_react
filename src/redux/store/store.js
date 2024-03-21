import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../feature/cart/CartSlice";
import authReducer from '../feature/cart/AuthSlice'
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer
  },
});
