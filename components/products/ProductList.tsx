import useProducts from "@/hooks/useProducts";
import { convertSlug } from "@/utils/helper";
import { Link } from "@chakra-ui/next-js";
import { SimpleGrid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import ProdcutCardSkeleton from "../ProductCardSkeleton";
import productData from "@/utils/productUtils";

let products;
const ProductList = () => {
  const { data, error, isLoading } = useProducts();
  const skeltons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  products = productData(data?.products)

  products = data?.products;

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
          href={{pathname:`/product/${product.slug}`, query:{id: `${product._id}`}}}
        >
          <ProductCard product={product} />
        </Link>
      ))}
    </SimpleGrid>
  );
};

export default ProductList;
