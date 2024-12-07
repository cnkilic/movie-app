import { createSlice } from "@reduxjs/toolkit";

import movieDetailsInitialState from "./initialState";

export const movieDetailsSlice = createSlice({
  name: "movieDetail",
  initialState: movieDetailsInitialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state. += action.payload;
    // },
  },
});

// export const {incrementByAmount } = moviesSlice.actions;

export default movieDetailsSlice.reducer;
