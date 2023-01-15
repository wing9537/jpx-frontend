import { createSlice, createSelector } from "@reduxjs/toolkit";

const defaultValue = { login: false };

// slice - actions & reducers
const dialogSlice = createSlice({
  name: "dialog",
  initialState: defaultValue,
  reducers: {
    open: (state, action) => {
      state[action.payload] = true;
    },
    close: (state, action) => {
      state[action.payload] = false;
    },
  },
});

export const { open: openDialog, close: closeDialog } = dialogSlice.actions;

export default dialogSlice.reducer;

// selectors
export const getDialog = (state) => state.dialog;

export const getDialogStateByName = (name) =>
  createSelector([getDialog, () => name], (dialog, name) => dialog[name]);
