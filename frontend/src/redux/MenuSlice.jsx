import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "Menu",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item._id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = menuSlice.actions;

export default menuSlice.reducer;
