import { createSlice } from "@reduxjs/toolkit";
export const songSlice = createSlice({
  name: "mainSong",
  initialState: {
    currentSong: {},
    isPlaying: false,
  },
  reducers: {
    playRequestedSong: (state, { payload }) => {
      state.currentSong = payload;
      state.isPlaying = true;
    },
    pauseRequestedSong: (state, { payload }) => {
      state.isPlaying = false;
    },
  },
});

export const { setCurrentSong, playRequestedSong, pauseRequestedSong } =
  songSlice.actions;
