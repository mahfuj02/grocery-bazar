import APIClient from "@/services/api-client";
import Category from "@/utils/Category";
import { useQuery } from "react-query";

const apiClient = new APIClient<Category>('/categories.json')

const useCategories = () => useQuery({
    queryKey:['categories'],
    queryFn: apiClient.getCategories
})

export default useCategories;
