import axios, { AxiosInstance } from "axios";

export interface Api<T> {
  readonly apiClient: T;

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
  constructor(public readonly apiClient: AxiosInstance) {
    // interceptors
    this.apiClient.interceptors.request.use(
      (config) => {
        const token = "";
        if (token) {
          config.headers!["Authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        if (axios.isAxiosError(error)) {
          console.log("에러다!!!!!");
        }
        return Promise.reject(error);
      }
    );
  }

  async GET<TData = unknown>(url: string) {
    const response = await this.apiClient.get<TData>(url);
    return response.data;
  }

  POST<TVariables = unknown, TData = unknown>(url: string, data?: TVariables) {
    return this.apiClient.post<TVariables, TData>(url, data);
  }

  PUT<TVariables = unknown, TData = unknown>(url: string, data?: TVariables) {
    return this.apiClient.put<TVariables, TData>(url, data);
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
        ? process.env.API_BASE_URL
        : process.env.LOCAL_HOST,
    timeout: 5000,
  })
);
