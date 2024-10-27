import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "user",
  initialState: [
    "Music",
    "Food",
    "Cards",
    "Car",
    "Clothes",
    "Shoes",
    "Medicines",
  ],
  reducers: {},
});

export default categorySlice.reducer;
