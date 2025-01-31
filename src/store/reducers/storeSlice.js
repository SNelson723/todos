import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  defaultStores: [],
  stores: [],
};

export const storeSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {
    setStores: (state, action) => {
      state.stores = action.payload;
    },
    setDefaultStores: (state, action) => {
      state.defaultStores = action.payload;
    }
  },
});

export const { setStores, setDefaultStores } = storeSlice.actions;
export default storeSlice.reducer;
