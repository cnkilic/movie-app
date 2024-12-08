import {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosInterceptorManager,
  AxiosHeaders,
  InternalAxiosRequestConfig,
} from "axios";

export default interface IAxiosInstance {
  defaults: AxiosRequestConfig & {
    headers: AxiosHeaders;
  };
  interceptors: {
    request: AxiosInterceptorManager<InternalAxiosRequestConfig>;
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

// import {
//   AxiosInterceptorManager,
//   AxiosRequestConfig,
//   AxiosResponse,
// } from "axios";
// export interface AxiosPromise<T = unknown> extends Promise<T> {}
// export interface IRequestError {
//   name: string;
//   statusCode: string;
//   error: boolean;
//   message: string;
// }
// export default interface IAxiosInstance {
//   (config: AxiosRequestConfig): AxiosPromise;
//   (url: string, config?: AxiosRequestConfig): AxiosPromise; // defaults: AxiosRequestConfig;
//   interceptors: {
//     request: AxiosInterceptorManager<AxiosRequestConfig>;
//     response: AxiosInterceptorManager<AxiosResponse>;
//   };
//   request<T = unknown>(config: AxiosRequestConfig): AxiosPromise<T>;
//   head<T = unknown>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;
//   get<T = unknown>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;
//   post<T = unknown>(
//     url: string,
//     data?: unknown,
//     config?: AxiosRequestConfig
//   ): AxiosPromise<T>;
// }
