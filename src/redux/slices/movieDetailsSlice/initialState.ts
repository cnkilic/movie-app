import { AsyncStatus } from "../../../constants/common";

interface Rating {
  Source: string;
  Value: string;
}
interface Movie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export interface MovieDetailsInitialState {
  movieDetails: Movie | null;
  movieDetailsLoading: AsyncStatus;
}

const movieDetailsInitialState: MovieDetailsInitialState = {
  movieDetails: null,
  movieDetailsLoading: AsyncStatus.Idle,
};

export default movieDetailsInitialState;
