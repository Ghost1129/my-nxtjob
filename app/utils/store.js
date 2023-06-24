import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../utils/slices/cardSlice";
import editorReducer from "../utils/slices/editorSlice";
import notesReducer from "../utils/slices/notesSlice";

const store = configureStore({
  reducer: {
    card: cardReducer,
    editor: editorReducer,
    notes: notesReducer,
  },
});

export default store;
