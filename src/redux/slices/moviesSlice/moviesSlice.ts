import { createSlice } from "@reduxjs/toolkit";

import movieSlicesInitialState from "./initialState";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: movieSlicesInitialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state. += action.payload;
    // },
  },
});

// export const {incrementByAmount } = moviesSlice.actions;

export default moviesSlice.reducer;
