import { configureStore } from "@reduxjs/toolkit";
import { songSlice } from "./slices/song";
export const store = configureStore({
  reducer: {
    mainSong: songSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
