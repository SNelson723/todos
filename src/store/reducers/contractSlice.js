import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contracts: [],
};

export const contractSlice = createSlice({
  name: "contracts",
  initialState,
  reducers: {
    setContracts: (state, action) => {
      state.contracts = action.payload;
    },
  },
});

export const { setContracts } = contractSlice.actions;
export default contractSlice.reducer;
