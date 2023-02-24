import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import dialogReducer from "./dialogSlice";
import settingReducer from "./settingSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    dialog: dialogReducer,
    setting: settingReducer,
  },
});
