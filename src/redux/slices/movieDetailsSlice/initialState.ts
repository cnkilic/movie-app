import { AsyncStatus } from "../../../constants/common";
import { Movie } from "../../../types/movieDetails";

export interface MovieDetailsInitialState {
  movieDetails: Movie | null;
  movieDetailsLoading: AsyncStatus;
}

const movieDetailsInitialState: MovieDetailsInitialState = {
  movieDetails: null,
  movieDetailsLoading: AsyncStatus.Idle,
};

export default movieDetailsInitialState;
