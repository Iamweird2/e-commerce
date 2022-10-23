import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: false,
};

export const cartOpenerSlice = createSlice({
  name: "cartInverter",
  initialState,
  reducers: {
    invertCart: (state) => {
      state.count = !state.count;
    },
  },
});

// Action creators are generated for each case reducer function
export const { invertCart } = cartOpenerSlice.actions;

export default cartOpenerSlice.reducer;
