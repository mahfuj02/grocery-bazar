import axios, { AxiosRequestConfig } from "axios";

interface ApiResponse {
  count: number;
}

interface ProductResponse<T> extends ApiResponse{
  products: T[]
}

interface CategoryResponse<T> extends ApiResponse{
  tags: T[]
}


interface ProductFetchResponse<T> {
  code: number;
  product: T;
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
      .get<ProductResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
  get = (id: string) => {
    return axiosInstance
      .get<ProductFetchResponse<T>>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}

export default APIClient;
