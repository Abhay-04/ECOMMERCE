import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import categoryReducer  from "./categorySlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    categories: categoryReducer,
  },
});

export default appStore;
