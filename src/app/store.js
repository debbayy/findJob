import { configureStore } from "@reduxjs/toolkit";
import slicer from "../redux/slicer";

export const store = configureStore({
  reducer: {
    slicer,
  },
});
