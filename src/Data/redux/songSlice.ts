import { createSlice } from "@reduxjs/toolkit";

export const songSlice = createSlice({
    name: "tracks",
    initialState: {
        selectedSong: []
    },
    reducers: {
        setselectedSong: (state, action) => {
            state.selectedSong = action.payload;
        }
    }
})

export const { setselectedSong } = songSlice.actions;

export default songSlice.reducer;