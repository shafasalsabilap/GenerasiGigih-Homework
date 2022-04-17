import { configureStore } from "@reduxjs/toolkit";
import accessTokenSlice from "./redux/accessTokenSlice";
import userSlice from "./redux/userSlice";
import songSlice from "./redux/songSlice";

export const store =  configureStore({
  reducer: {
    accessToken: accessTokenSlice,
    user: userSlice,
    tracks: songSlice
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;