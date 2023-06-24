import { createSlice } from "@reduxjs/toolkit";

const initialState =
  "<p><strong>Hello World</strong></p><p><br></p><p>Just Trying</p><p><br></p>";

const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    updateEditor: (state, action) => {
      state = action.payload;
    },
  },
});

export const selectEditor = (state) => state.editor;
export const { updateEditor } = editorSlice.actions;

export default editorSlice.reducer;
