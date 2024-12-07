import { AsyncStatus } from "../../../constants/common";

export type Movies = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: "movie" | "series" | "episodes";
  Poster: string;
}[];

export interface MovieSliceInitialState {
  movies: Movies | null;
  moviesLoading: AsyncStatus;
}

const movieSliceInitialState: MovieSliceInitialState = {
  movies: null,
  moviesLoading: AsyncStatus.Idle,
};

export default movieSliceInitialState;
