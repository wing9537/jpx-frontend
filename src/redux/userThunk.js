import { createAsyncThunk } from "@reduxjs/toolkit";

export const doUserLogin = createAsyncThunk(
  "user/login",
  async (data, { rejectWithValue }) => {
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
      return rejectWithValue(false);
    }
  }
);

export const registration = createAsyncThunk("user/register", async (data) => {
  const response = await fetch("/jpx/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.ok;
});

export const getProfile = createAsyncThunk(
  "user/profile",
  async (data, { rejectWithValue }) => {
    const response = await fetch("/jpx/user/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.cookies.get("token")}`,
      },
    });
    if (response.ok) {
      return response.json();
    } else {
      return rejectWithValue(false);
    }
  }
);
