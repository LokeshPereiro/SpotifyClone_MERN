import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    isAuthenticated: false,
  },
  reducers: {
    loggedUser: (state, { payload }) => {
      state.user = payload;
      state.isAuthenticated = true;
    },
    loggedOutUser: (state) => {
      state.user = {};
      state.isAuthenticated = false;
    },
  },
});

export const { loggedUser, loggedOutUser } = userSlice.actions;
