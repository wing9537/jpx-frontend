import {
  createSlice,
  createSelector,
  createAsyncThunk,
} from "@reduxjs/toolkit";

const defaultValue = { name: "", token: "" };

// thunks
export const doUserLogin = createAsyncThunk(
  "user/login",
  async (data, { rejectWithValue }) => {
    console.log(data);

    const response = await fetch("jpx/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return response.json();
    } else {
      return rejectWithValue(response.ok);
    }
  }
);

// slice - actions & reducers
const userSlice = createSlice({
  name: "user",
  initialState: defaultValue,
  reducers: {
    logout: (state, action) => {
      console.log("logout");
      return defaultValue;
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
