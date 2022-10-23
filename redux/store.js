import { configureStore, createReducer } from "@reduxjs/toolkit";
import menuToggleReducer from "./menuToggleSlice";
import counterReducer from "./counterSlice";
import cartReducer from "./cartCountSlice";
import cartOpenerReducer from "./cartOpenerSlice";

export const store = configureStore({
  reducer: {
    cartCounter: cartReducer,
    counter: counterReducer,
    menuToggle: menuToggleReducer,
    cartInverter: cartOpenerReducer,
  },
});
