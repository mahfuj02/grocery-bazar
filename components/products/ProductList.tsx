import useProducts from "@/hooks/useProducts";
import { convertSlug } from "@/utils/helper";
import { Link } from "@chakra-ui/next-js";
import { SimpleGrid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import ProdcutCardSkeleton from "../ProductCardSkeleton";

let products;
const ProductList = () => {
  const { data, error, isLoading } = useProducts();
  const skeltons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  products = data?.products;
  products?.forEach((product) => {
    const randomPrice = Math.floor(Math.random() * (1000 - 10 + 1)) + 10;
    product.price = randomPrice;
    product.slug = convertSlug(product.product_name);
    product.weight = ["100mg", "500mg", "1kg"];
  });

  if (error) null;
  // if (isLoading) return <p>Loading....</p>;
  return (
    <SimpleGrid columns={{ base: 2, md: 3 }} spacing={{ base: 1, md: 4 }}>
      {isLoading &&
        skeltons.map((skeleton) => (
          <ProdcutCardSkeleton key={skeleton}></ProdcutCardSkeleton>
        ))}
      {isLoading && <ProdcutCardSkeleton></ProdcutCardSkeleton>}

      {data?.products?.map((product, index) => (
        <Link
          textDecoration="none"
          _hover={{ textDecoration: "none" }}
          key={index}
          href={`/product/${product.slug}`}
        >
          <ProductCard product={product} />
        </Link>
      ))}
    </SimpleGrid>
  );
};

export default ProductList;
