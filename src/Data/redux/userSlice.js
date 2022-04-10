import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: {
            displayName: undefined,
            userID: undefined,
            imgSrc: undefined
        }
    },
    reducers: {
        setUserID: (state, action) => {
            state.value.userID = action.payload;
        },
        setUserDisplayName: (state, action) => {
            state.value.displayName = action.payload;
        },
        setImgSrc: (state, action) => {
            state.value.imgSrc = action.payload;
        }
    }
})

export const { setUserID, setUserDisplayName, setImgSrc } = userSlice.actions;
export default userSlice.reducer;