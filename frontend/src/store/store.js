import { configureStore } from "@reduxjs/toolkit";
import { songSlice } from "./slices/song";
import { userSlice } from "./slices/user";
export const store = configureStore({
  reducer: {
    mainSong: songSlice.reducer,
    auth: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
