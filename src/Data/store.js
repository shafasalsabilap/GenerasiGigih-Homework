import { configureStore } from "@reduxjs/toolkit";
import accessTokenSlice from "./redux/accessTokenSlice";

export default configureStore({
  reducer: {
    accessToken: accessTokenSlice,
  }
});