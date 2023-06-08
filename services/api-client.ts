import axios, { AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
  count: number;
  products: T[];
}

export const axiosInstance = axios.create({
  baseURL: "https://world.openfoodfacts.org",
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
