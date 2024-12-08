import { AsyncStatus } from "../../../constants/common";
import { Movie } from "../../../types/types";

export interface MovieDetailsInitialState {
  movieDetails: Movie | undefined;
  movieDetailsStatus: AsyncStatus;
  movieDetailsError: string | undefined;
}

const movieDetailsInitialState: MovieDetailsInitialState = {
  movieDetails: undefined,
  movieDetailsStatus: AsyncStatus.Idle,
  movieDetailsError: undefined,
};

export default movieDetailsInitialState;
