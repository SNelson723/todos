import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./reducers/todoSlice";
import decodeReducer from './reducers/decodeSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    decodes: decodeReducer
  },
});
