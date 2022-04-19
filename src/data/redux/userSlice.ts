import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userName: "display_name",
        userID: undefined,
        imgSrc: "img_src",
    },
    reducers: {
        setUserID: (state, action) => {
            state.userID = action.payload;
        },
        setUserName: (state, action) => {
            state.userName = action.payload;
        },
        setImgSrc: (state, action) => {
            state.imgSrc = action.payload;
        }
    }
})

export const { setUserID, setUserName, setImgSrc } = userSlice.actions;

export default userSlice.reducer;
