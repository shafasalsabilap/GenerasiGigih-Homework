import { configureStore } from "@reduxjs/toolkit";
import { accessTokenSlice } from "./redux/tokenslice";
import { userSlice } from "./redux/reducerslice";

export default configureStore({
  reducer: {
    accessToken: accessTokenSlice,
    user: userSlice
  }
});