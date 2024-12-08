import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import movieDetailsInitialState from "./initialState";
import { movieAppApi } from "../../../api";
import { AsyncStatus } from "../../../constants/common";

export const fetchMovieByImdbIdThunk = createAsyncThunk(
  "movieDetail/fetchMovieDetails",
  async (searchParams: { imdbId: string }) => {
    const response = await movieAppApi.getMovieDetails({
      imdbId: searchParams.imdbId,
    });
    return response;
  }
);

export const movieDetailsSlice = createSlice({
  name: "movieDetail",
  initialState: movieDetailsInitialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieByImdbIdThunk.pending, (state) => {
        state.movieDetailsStatus = AsyncStatus.Loading;
      })
      .addCase(fetchMovieByImdbIdThunk.fulfilled, (state, action) => {
        state.movieDetailsStatus = AsyncStatus.Success;
        state.movieDetails = action.payload;
      })
      .addCase(fetchMovieByImdbIdThunk.rejected, (state, action) => {
        state.movieDetailsStatus = AsyncStatus.Error;
        state.movieDetails = undefined;
        state.movieDetailsError = action.error.message;
        console.error("Error fetching movies:", action.error.message);
      });
  },
});

export default movieDetailsSlice.reducer;
