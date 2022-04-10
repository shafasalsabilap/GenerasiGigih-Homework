import { configureStore } from "@reduxjs/toolkit";
import accessTokenSlice from "./redux/accessTokenSlice";
import userSlice from "./redux/userSlice";

export default configureStore({
  reducer: {
    accessToken: accessTokenSlice,
    user: userSlice
  }
});