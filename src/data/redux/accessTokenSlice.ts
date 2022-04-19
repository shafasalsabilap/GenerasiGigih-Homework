import { createSlice } from "@reduxjs/toolkit";

export const accessTokenSlice = createSlice({
  name: "accessToken",
  initialState: {
    value: undefined, 
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.value = action.payload;
    }
  }
})

export const { setAccessToken } = accessTokenSlice.actions;

export default accessTokenSlice.reducer;
