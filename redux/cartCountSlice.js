import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "cartCounter",
  initialState,
  reducers: {
    incrementTo: (state, action) => {
      state.count = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementTo } = counterSlice.actions;

export default counterSlice.reducer;
