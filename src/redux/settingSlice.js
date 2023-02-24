import { createSlice } from "@reduxjs/toolkit";

// slice - actions & reducers
const settingSlice = createSlice({
  name: "setting",
  initialState: {
    selectedOption: "profile",
  },
  reducers: {
    selectOption: (state, action) => {
      state.selectedOption = action.payload;
    },
  },
});

export const { selectOption } = settingSlice.actions;

export default settingSlice.reducer;

// selectors

export const getSetting = (state) => state.setting.selectedOption;
