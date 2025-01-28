import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = appSlice.actions;
export default appSlice.reducer;
