import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  decodes: [],
  filteredDecodes: []
};

export const decodeSlice = createSlice({
  name: "decodes",
  initialState,
  reducers: {
    setDecodes: (state, action) => {
      state.decodes = action.payload;
    },
    setFilteredDecodes: (state, action) => {
      const { key, value } = action.payload;
      state.filteredDecodes = state.decodes.filter(
        (decode) => decode[key] === value
      );
    },
  },
});

export const { setDecodes, setFilteredDecodes } = decodeSlice.actions;
export default decodeSlice.reducer;
