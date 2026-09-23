import axios, { AxiosRequestConfig } from "axios";
import { Product } from "@/utils/Product";
import { fallbackProducts } from "@/utils/catalog";

interface ApiResponse {
  count?: number;
}

interface ProductResponse<T> {
  count?: number;
  results?: T[];
  products?: T[];
}

interface CategoryResponse<T> extends ApiResponse{
  tags: T[]
}

interface ProductFetchResponse<T> { product?: T; id?: number; title?: string; }

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "/api/backend";

export const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
});

const normalizeProduct = (product: Product & { id?: number; title?: string; unit_price?: number }) => ({
  _id: product._id ?? product.id ?? 0,
  product_name: product.product_name || product.title || "Unnamed product",
  categories: product.categories || [],
  image_url: product.image_url || "",
  price: product.price ?? product.unit_price ?? 0,
  slug: product.slug || "-",
  weight: Array.isArray(product.weight) ? product.weight : [product.weight || "1 item"],
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<ProductResponse<T>>(this.endpoint, config)
      .then((res) => ({
        products: (res.data.results || res.data.products || []).map((product) => normalizeProduct(product as Product)),
        count: res.data.count || 0,
      }))
      .catch(() => ({ products: fallbackProducts, count: fallbackProducts.length }));
  };
  get = (id: string) => {
    return axiosInstance
      .get<ProductFetchResponse<T>>(this.endpoint + "/" + id)
      .then((res) => ({ product: normalizeProduct((res.data.product || res.data) as Product) }))
      .catch(() => ({
        product: fallbackProducts.find((product) => product._id === Number(id)),
      }));
  };
  getCategories = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<CategoryResponse<T>>(this.endpoint, config)
      .then((res) => res.data)
  };

}

export default APIClient;
