import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./slices/moviesSlice/moviesSlice";
import movieDetailsSlice from "./slices/movieDetailsSlice/movieDetailsSlice";

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    movieDetail: movieDetailsSlice,
  },
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
