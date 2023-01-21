import { createSlice, createSelector, createAsyncThunk } from "@reduxjs/toolkit";

const defaultValue = { name: "", token: "" };

// thunks
export const doUserLogin = createAsyncThunk("user/login", async (data) => {
  // TODO: call api
  return { name: "Tommy Kwok", token: "1234" };
});

// slice - actions & reducers
const userSlice = createSlice({
  name: "user",
  initialState: defaultValue,
  reducers: {
    logout: (state, action) => {
      state = defaultValue; // reset to default
    },
  },
  extraReducers: (builder) => {
    builder.addCase(doUserLogin.fulfilled, (state, action) => {
      const { name, token } = action.payload;
      state.name = name;
      state.token = token;
    });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;

// selectors
export const getUser = (state) => state.user;

export const getUserName = createSelector(getUser, (user) => user.name);

export const getToken = createSelector(getUser, (user) => user.token);
