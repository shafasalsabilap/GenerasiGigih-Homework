import { createSlice } from "@reduxjs/toolkit";

export const songSlice = createSlice({
    name: "tracks",
    initialState: {
        selectedSong: []
    },
    reducers: {
        setSelectedSong: (state, action) => {
            state.selectedSong = action.payload;
        }
    }
})

export const { setSelectedSong } = songSlice.actions;

export default songSlice.reducer;

