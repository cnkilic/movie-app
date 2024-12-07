import axios from "../axios/axios-instance";
import { Movie } from "../types/movieDetails";
import { Movies } from "../types/movies";

type getMoviesResponse = {
  data: {
    totalResults: string;
    Search: Movies;
  };
};

export const movieAppApi = {
  getMovies: async (params: {
    searchString: string;
    type?: string;
    year?: string;
    page?: string;
  }) => {
    const response = await axios.get<getMoviesResponse>("/", {
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
    const response = await axios.get<Movie>("/", {
      params: {
        i: params.imdbId,
      },
    });

    return response;
  },
};
