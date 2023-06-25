import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: "<p><strong>Hello World</strong></p><p><br></p><p>Just Trying</p><p><br></p>",
};

const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    updateEditor: (state, action) => {
      const { data } = action.payload;
      state.data = data;
    },
  },
});

export const selectEditor = (state) => state.editor.data;
export const { updateEditor } = editorSlice.actions;

export default editorSlice.reducer;
