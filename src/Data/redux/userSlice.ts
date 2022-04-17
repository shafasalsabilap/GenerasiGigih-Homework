import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        displayName: "display_name",
        userID: undefined,
        imgSrc: "img_src",
    },
    reducers: {
        setUserID: (state, action) => {
            state.userID = action.payload;
        },
        setUserDisplayName: (state, action) => {
            state.displayName = action.payload;
        },
        setImgSrc: (state, action) => {
            state.imgSrc = action.payload;
        }
    }
})

export const { setUserID, setUserDisplayName, setImgSrc } = userSlice.actions;
export default userSlice.reducer;