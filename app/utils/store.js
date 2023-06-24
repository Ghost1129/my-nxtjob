import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../utils/slices/cardSlice";

const store = configureStore({
  reducer: {
    card: cardReducer,
  },
});

export default store;
