import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, post } from "./fetchAPI";

export const loginUser = createAsyncThunk(
  "user/login",
  async (data, { rejectWithValue }) => {
    const response = await post({ link: "/jpx/user/login", data });
    if (response.ok) {
      return response.json();
    } else {
      return rejectWithValue(false);
    }
  }
);

export const newProfile = createAsyncThunk(
  "user/register",
  async (data, { rejectWithValue }) => {
    const response = await post({ link: "/jpx/user/register", data });
    return response.ok;
  }
);

export const getProfile = createAsyncThunk(
  "user/profile",
  async (data, { rejectWithValue }) => {
    const response = await get({ link: "/jpx/user/profile" });
    if (response.ok) {
      return response.json();
    } else {
      return rejectWithValue(false);
    }
  }
);

export const setProfile = null; // TODO: /user/profile [PUT]

export const delProfile = null; // TODO: /user/profile [DELETE]
