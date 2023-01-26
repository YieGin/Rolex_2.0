import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
const store = configureStore({
  reducer: {
    AllCart: cartSlice,
  },
});

export default store;
