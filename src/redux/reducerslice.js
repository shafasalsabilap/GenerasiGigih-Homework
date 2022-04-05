import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: {
            displayName: undefined,
            user_id: undefined
        }
    },
    reducers: {
        user_id: (state, action) => {
            state.value.user_id = action.payload;
        },
        userDisplayName: (state, action) => {
            state.value.displayName = action.payload;
        }
    }
})

export const { user_id, userDisplayName } = userSlice.actions;
export default userSlice.reducer;