import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: null,
  reducers: {
    addData: (state, action) => {
      return action.payload;
    },
    removeData: () => {
      return null;
    },
  },
});

export const { addData, removeData } = categorySlice.actions;

export default categorySlice.reducer;
