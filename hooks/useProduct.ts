import APIClient from "@/services/api-client";
import { Product } from "@/utils/Product";
import { useQuery } from "react-query";



const useProduct = (id: string | undefined) => {

    const apiClient = new APIClient<Product>(`/products`);
    return useQuery({
    queryKey: ["product", id],
  queryFn: () => apiClient.get(id as string),
  enabled: Boolean(id),
  });

};

export default useProduct
