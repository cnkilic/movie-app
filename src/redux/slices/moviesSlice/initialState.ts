import { AsyncStatus } from "../../../constants/common";
import { Movies } from "../../../types/types.ts";

export interface MovieSliceInitialState {
  movies: Movies | undefined;
  moviesStatus: AsyncStatus;
  moviesError: string | undefined;
  totalResults: string | undefined;
}

const movieSliceInitialState: MovieSliceInitialState = {
  movies: undefined,
  moviesStatus: AsyncStatus.Idle,
  moviesError: undefined,
  totalResults: undefined,
};

export default movieSliceInitialState;
