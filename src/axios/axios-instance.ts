import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://www.omdbapi.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

const apiKey = import.meta.env.VITE_OMDB_API_KEY;

axios.interceptors.request.use(
  (config) => {
    if (!config.params) {
      config.params = {};
    }

    config.params = {
      ...config.params,
      apikey: apiKey,
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
