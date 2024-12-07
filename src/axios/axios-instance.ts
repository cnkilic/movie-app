import Axios from "axios";
import IAxiosInstance from "./axios-instance.interface";

const axios = Axios.create({
  baseURL: "http://www.omdbapi.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
}) as IAxiosInstance;

axios.interceptors.request.use(
  (config) => {
    const apiKey = "76c39e1d";

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
