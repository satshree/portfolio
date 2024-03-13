import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./reducers";

export default configureStore({
  reducer: projectReducer,
});
