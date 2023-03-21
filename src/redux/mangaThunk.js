import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, post } from "./fetchAPI";

export const newManga = createAsyncThunk(
  "manga/create",
  async (data, { rejectWithValue }) => {
    const response = await post({ link: "/jpx/manga/new", data });
    return response.ok;
  }
);

export const getManga = createAsyncThunk(
  "manga/read",
  async (id, { rejectWithValue }) => {
    const response = await get({ link: `/jpx/manga/${id}` });
    if (response.ok) {
      return response.json();
    } else {
      rejectWithValue(false);
    }
  }
);

export const setManga = null; // TODO: /manga/:id [PUT]

export const delManga = null; // TODO: /manga/:id [DELETE]

export const searchManga = createAsyncThunk(
  "manga/search",
  async (data, { rejectWithValue }) => {
    const response = await get({ link: "/jpx/manga/search", data });
    if (response.ok) {
      return response.json();
    } else {
      rejectWithValue(false);
    }
  }
);

export const getChapter = null; // TODO: /manga/chapter/:id [GET]

export const delChapter = null; // TODO: /manga/chapter/:id [DELETE]

export const fetchChapter = null; // TODO: /manga/:id/chapter/:ep/fetch [PATCH]
