import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducers/todoSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
