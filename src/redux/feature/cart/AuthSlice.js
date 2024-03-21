import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: JSON.parse(localStorage.getItem("authStatus")) || false,
  userData: JSON.parse(localStorage.getItem("userData")) || null,
};

export const authSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userData = action.payload;
      state.status = true;
      localStorage.setItem("authStatus", JSON.stringify(true));
      localStorage.setItem("userData", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.userData = null;
      state.status = false;
      localStorage.removeItem("userData");
      localStorage.removeItem("authStatus");
      
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
