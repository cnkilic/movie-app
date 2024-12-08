import axios from "../axios/axios-instance";
import { Movie } from "../types/types";
import { Movies } from "../types/types";

export type MoviesResponseData = {
  totalResults: string;
  Search: Movies;
  Error?: string;
};
export type MoviesResponse = {
  data: MoviesResponseData;
};

export type MoviesDetailsResponse = {
  data: Movie;
};

export const movieAppApi = {
  getMovies: async (params: {
    searchString: string;
    type?: string;
    year?: string;
    page?: string;
  }) => {
    const response = await axios.get<MoviesResponse>("/", {
      params: {
        s: params.searchString || "",
        type: params.type || "",
        y: params.year || "",
        page: params.page || "",
      },
    });

    return response.data;
  },

  getMovieDetails: async (params: { imdbId: string }) => {
    const response = await axios.get<MoviesDetailsResponse>("/", {
      params: {
        i: params.imdbId,
      },
    });

    return response.data;
  },
};
