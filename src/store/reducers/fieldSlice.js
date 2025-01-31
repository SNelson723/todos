import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fields: [],
  currentField: null
};

export const fieldSlice = createSlice({
  name: 'fields',
  initialState,
  reducers: {
    setFields: (state, action) => {
      state.fields = action.payload;
    },
    setCurrentField: (state, action) => {
      state.currentField = state.fields.filter(field => field.fieldName === action.payload)
    },
  }
});
export const { setFields, setCurrentField } = fieldSlice.actions;
export default fieldSlice.reducer;