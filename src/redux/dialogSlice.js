import {
    createSlice,
    createSelector,
    createAsyncThunk,
} from "@reduxjs/toolkit";

const defaultValue = { login: false };

// slice - actions & reducers
const dialogSlice = createSlice({
    name: "dialog",
    initialState: defaultValue,
    reducers: {
        open: (state, action) => {
            state[action.name] = true;
        },
        close: (state, action) => {
            state[action.name] = false;
        }
    },
});

export const { open, close } = dialogSlice.actions;

export default dialogSlice.reducer;

// selectors
export const getDialog = (state) => state.dialog;

export const getDialogStateByName = (name) => createSelector(getDialog, (dialog) => dialog[name]);
