import axios, { AxiosRequestConfig } from "axios";
import { config } from "process";

interface ProductsFetchResponse<T> {
  count: number;
  products: T[];
}

interface ProductFetchResponse<T> {
  code:number;
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
      .get<ProductsFetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
  get = (id: string) =>{
    return axiosInstance.get<ProductFetchResponse<T>>(this.endpoint+ '/' + id).then((res) => res.data)
  }
}

export default APIClient;
