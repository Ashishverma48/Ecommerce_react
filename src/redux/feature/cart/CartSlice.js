import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const newItem = action.payload;
      //   Check Item Is alrasy Exits In Cart
      const extistingItem = state.cart.find(
        (itemId) => itemId.id == newItem.id
      );
      if (extistingItem) {
        extistingItem.quantity++;
      } else {
        state.cart.push({ ...newItem, quantity: 1 });
        // Add New Item Cart
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    incrementItem: (state, action) => {
      const { id } = action.payload;
      const cartItem = state.cart.find((item) => item.id === id);
      if (cartItem) {
        cartItem.quantity++;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    decrementItem: (state, action) => {
      const { id } = action.payload;
      const cartItem = state.cart.find((item) => item.id === id);
      if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity--;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeItem:(state,action)=>{
        const {id} = action.payload;
        state.cart = state.cart.filter(item=>item.id !== id)
        localStorage.setItem('cart',JSON.stringify(state.cart))

    }
  },
});

export const { addCart,incrementItem,decrementItem,removeItem } = cartSlice.actions;

export default cartSlice.reducer;
