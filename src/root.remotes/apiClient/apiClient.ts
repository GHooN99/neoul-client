import axios, { AxiosInstance, AxiosResponse } from "axios";

export interface Api<T> {
  readonly apiClient: T;
  setAuthToken(token: string): void;
  GET<TData = unknown>(url: string): Promise<TData>;
  POST<TVariables = unknown, TData = unknown>(
    url: string,
    data?: TVariables
  ): Promise<TData>;
  PUT<TVariables = unknown, TData = unknown>(
    url: string,
    data?: TVariables
  ): Promise<TData>;
  DELETE<TData = unknown>(url: string): Promise<TData>;
}

class ApiImpl implements Api<AxiosInstance> {
  private authToken = "";
  constructor(public readonly apiClient: AxiosInstance) {
    // interceptors
    this.apiClient.interceptors.request.use((config) => {
      if (this.authToken && config.headers) {
        config.headers["Authorization"] = `Bearer ${this.authToken}`;
      }
      return config;
    });
  }

  setAuthToken(token: string) {
    this.authToken = token;
  }

  async GET<TData = unknown>(url: string) {
    const response = await this.apiClient.get<TData>(url);
    return response.data;
  }

  async POST<TVariables = unknown, TData = unknown>(
    url: string,
    data?: TVariables
  ) {
    const response = await this.apiClient.post<
      TVariables,
      AxiosResponse<TData>
    >(url, data);
    return response.data;
  }

  async PUT<TVariables = unknown, TData = unknown>(
    url: string,
    data?: TVariables
  ) {
    const response = await this.apiClient.put<TVariables, AxiosResponse<TData>>(
      url,
      data
    );
    return response.data;
  }

  async DELETE<TData = unknown>(url: string) {
    const response = await this.apiClient.delete<TData>(url);
    return response.data;
  }
}

export const API: Api<AxiosInstance> = new ApiImpl(
  axios.create({
    baseURL:
      process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_PRODUCTION_API_BASE_URL
        : process.env.NEXT_PUBLIC_DEVELOPMENT_API_BASE_URL,
    timeout: 1000 * 10,
  })
);
