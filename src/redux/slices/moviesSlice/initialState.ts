import { AsyncStatus } from "../../../constants/common";
import { Movies } from "../../../types/movies.ts";

export interface MovieSliceInitialState {
  movies: Movies | null;
  moviesLoading: AsyncStatus;
}

const movieSliceInitialState: MovieSliceInitialState = {
  movies: null,
  moviesLoading: AsyncStatus.Idle,
};

export default movieSliceInitialState;
