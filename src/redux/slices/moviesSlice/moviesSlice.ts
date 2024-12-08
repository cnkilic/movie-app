import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import movieSlicesInitialState from "./initialState";
import { movieAppApi } from "../../../api";
import { AsyncStatus } from "../../../constants/common";

export const fetchMoviesThunk = createAsyncThunk(
  "movies/fetchMovies",
  async (searchParams: {
    searchString: string;
    page?: string;
    type?: string;
    year?: string;
  }) => {
    const response = await movieAppApi.getMovies({
      searchString: searchParams.searchString,
      page: searchParams.page,
      type: searchParams.type,
      year: searchParams.year,
    });

    return response;
  }
);

export const moviesSlice = createSlice({
  name: "movies",
  initialState: movieSlicesInitialState,
  reducers: {
    setSearchString: (state, action: PayloadAction<string>) => {
      state.searchString = action.payload;
    },
    setYear: (state, action: PayloadAction<string>) => {
      state.year = action.payload;
    },
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<string>) => {
      state.currentPage = action.payload;
    },
    setSelectedMovieImdbId: (state, action: PayloadAction<string | null>) => {
      state.selectedMovieImdbId = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesThunk.pending, (state) => {
        state.moviesStatus = AsyncStatus.Loading;
      })
      .addCase(fetchMoviesThunk.fulfilled, (state, action) => {
        state.moviesStatus = AsyncStatus.Success;
        state.movies = action.payload?.Search;
        state.totalResults = action.payload?.totalResults;
        if (action.payload.Error) {
          state.moviesError = action.payload.Error;
        }
      })
      .addCase(fetchMoviesThunk.rejected, (state, action) => {
        state.moviesStatus = AsyncStatus.Error;
        state.movies = undefined;
        state.moviesError = action.error.message;
        console.error("Error fetching movies:", action.error.message);
      });
  },
});

export const {
  setSearchString,
  setType,
  setYear,
  setCurrentPage,
  setSelectedMovieImdbId,
} = moviesSlice.actions;

export default moviesSlice.reducer;
