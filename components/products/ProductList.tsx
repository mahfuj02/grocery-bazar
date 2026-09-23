import useProducts from "@/hooks/useProducts";
import { Link } from "@chakra-ui/next-js";
import { SimpleGrid, Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import ProdcutCardSkeleton from "../ProductCardSkeleton";
import productData from "@/utils/productUtils";

const ProductList = () => {
  const { data, error, isLoading } = useProducts();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const products = productData(data?.products);

  if (error) {
    return <Text>Unable to load products. Please try again.</Text>;
  }

  return (
    <SimpleGrid columns={{ base: 2, md: 3 }} spacing={{ base: 1, md: 4 }}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <ProdcutCardSkeleton key={skeleton}></ProdcutCardSkeleton>
        ))}

      {products?.map((product) => (
        <Link
          textDecoration="none"
          _hover={{ textDecoration: "none" }}
          key={product._id}
          href={{ pathname: `/product/${product.slug}`, query: { id: `${product._id}` } }}
        >
          <ProductCard product={product} />
        </Link>
      ))}
    </SimpleGrid>
  );
};

export default ProductList;
