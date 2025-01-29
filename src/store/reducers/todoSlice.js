import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    clearTodos: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.isChecked !== action.payload
      );
    },
    setChecked: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isChecked: !todo.isChecked }
          : todo
      );
    },
  },
});

export const { addTodo, removeTodo, clearTodos, setChecked } = todoSlice.actions;
export default todoSlice.reducer;
