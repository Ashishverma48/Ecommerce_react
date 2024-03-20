import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

export const authSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userData = action.payload;
      state.status = true;
    },
    logout: (state) => {
      state.userData = null;
      state.status = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
