import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import dialogReducer from "./dialogSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    dialog: dialogReducer,
  },
});
