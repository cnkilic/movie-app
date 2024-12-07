export type Movies = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: "movie" | "series" | "episodes";
  Poster: string;
}[];
