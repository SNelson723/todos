import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  decodes: [],
};

export const decodeSlice = createSlice({
  name: "decodes",
  initialState,
  reducers: {
    setDecodes: (state, action) => {
      state.decodes = action.payload;
    },
  },
});

export const { setDecodes } = decodeSlice.actions;
export default decodeSlice.reducer;
