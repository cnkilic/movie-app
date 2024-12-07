import {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosInterceptorManager,
  AxiosHeaders,
  AxiosHeaderValue,
} from "axios";

export default interface IAxiosInstance extends AxiosInstance {
  defaults: AxiosRequestConfig & {
    headers: AxiosHeaders & {
      [key: string]: AxiosHeaderValue;
    };
  };
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
  };
  request<T = unknown>(config: AxiosRequestConfig): Promise<T>;
  get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>;
  head<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T>;
}
