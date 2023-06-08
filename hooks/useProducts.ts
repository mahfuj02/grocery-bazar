
import APIClient from "@/services/api-client";
import { Product } from "@/utils/Product";
import { useQuery } from "react-query";

const apiClient = new APIClient<Product>('/products.json')

const useProducts = () => useQuery({
    queryKey: ['products'],
    queryFn: apiClient.getAll
})

export default useProducts