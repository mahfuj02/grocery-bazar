import APIClient from "@/services/api-client";
import { Product } from "@/utils/Product";
import { useQuery } from "react-query";



const useProduct = (id: string  ) => {

    const apiClient = new APIClient<Product>(`/api/v0/product`);
    return useQuery({
    queryKey: ["product", id],
    queryFn: () => apiClient.get(id),
  });

};

export default useProduct
