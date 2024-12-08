import { AsyncStatus } from "../../../constants/common";
import { Movies } from "../../../types/types.ts";

export interface MovieSliceInitialState {
  movies: Movies | undefined;
  moviesStatus: AsyncStatus;
  moviesError: string | undefined;
  totalResults: string | undefined;
  searchString: string;
  type: string;
  year: string;
  currentPage: string;
  selectedMovieImdbId: string | null;
}

const movieSliceInitialState: MovieSliceInitialState = {
  movies: undefined,
  moviesStatus: AsyncStatus.Idle,
  moviesError: undefined,
  totalResults: undefined,
  searchString: "Pokemon",
  type: "",
  year: "",
  currentPage: "0",
  selectedMovieImdbId: null,
};

export default movieSliceInitialState;
