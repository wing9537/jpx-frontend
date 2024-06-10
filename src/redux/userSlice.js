import { createSlice, createSelector } from "@reduxjs/toolkit";
import { loginUser } from "./userThunk";

const defaultValue = { name: "", token: "" };

// slice - actions & reducers
const userSlice = createSlice({
  name: "user",
  initialState: defaultValue,
  reducers: {
    refresh: (state, action) => {
      const { username, token } = action.payload;
      state.name = username ?? "";
      state.token = token ?? "";
    },
    logout: (state, action) => {
      console.log("logout");
      window.cookies.remove("token");
      return defaultValue;
    },
  },
  extraReducers: builder => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const { name, token } = action.payload;
      state.name = name ?? "";
      state.token = token ?? "";
      window.cookies.set("token", token);
    });
  },
  // reducers: builder => {
  //   builder.addCase('refresh', (state, action) => {
  //     const { username, token } = action.payload;
  //     state.name = username ?? "";
  //     state.token = token ?? "";
  //   });
  //   builder.addCase('logout', (state, action) => {
  //     console.log("logout");
  //     window.cookies.remove("token");
  //     return defaultValue;
  //   });
  // },
  // extraReducers: builder => {
  //   builder.addCase(loginUser.fulfilled, (state, action) => {
  //     const { name, token } = action.payload;
  //     state.name = name ?? "";
  //     state.token = token ?? "";
  //     window.cookies.set("token", token);
  //   });
  // },
});

export const { refresh: refreshUser, logout } = userSlice.actions;

export default userSlice.reducer;

// selectors
export const getUser = (state) => state.user;

export const getUserName = createSelector(getUser, (user) => user.name);

export const getToken = createSelector(getUser, (user) => user.token);
