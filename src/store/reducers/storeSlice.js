import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stores: [],
};

export const storeSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {
    setStores: (state, action) => {
      state.stores = action.payload;
    },
  },
});

export const { setStores } = storeSlice.actions;
export default storeSlice.reducer;
