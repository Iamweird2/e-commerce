import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const menuToggleSlice = createSlice({
  name: "menuToggle",
  initialState,
  reducers: {
    invert: (state) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { invert } = menuToggleSlice.actions;

export default menuToggleSlice.reducer;
