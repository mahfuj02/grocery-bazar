import useProducts from "@/hooks/useProducts";
import { Link } from "@chakra-ui/next-js";
import { Button, Center, SimpleGrid, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import ProdcutCardSkeleton from "../ProductCardSkeleton";
import productData from "@/utils/productUtils";

const ProductList = () => {
  const router = useRouter();
  const { data, error, isLoading } = useProducts();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const products = productData(data?.products);
  const selectedCategory = typeof router.query.category === "string" ? router.query.category : "";
  const filteredProducts = products?.filter((product) => {
    if (!selectedCategory) return true;
    const category = selectedCategory.toLowerCase();
    return product.categories.some((value) => {
      const productCategory = value.toLowerCase();
      return productCategory.includes(category) || category.includes(productCategory);
    });
  });
  const [visibleCount, setVisibleCount] = useState(20);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisibleCount(20);
  }, [selectedCategory]);

  useEffect(() => {
    const element = loadMoreRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisibleCount((count) => Math.min(count + 20, filteredProducts?.length || count));
      }
    }, { rootMargin: "240px" });

    observer.observe(element);
    return () => observer.disconnect();
  }, [filteredProducts?.length]);

  const visibleProducts = filteredProducts?.slice(0, visibleCount) || [];

  if (error) {
    return <Text>Unable to load products. Please try again.</Text>;
  }

  return (
    <SimpleGrid columns={{ base: 2, md: 3 }} spacing={{ base: 1, md: 4 }}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <ProdcutCardSkeleton key={skeleton}></ProdcutCardSkeleton>
        ))}

      {visibleProducts.map((product) => (
        <Link
          textDecoration="none"
          _hover={{ textDecoration: "none" }}
          key={product._id}
          href={{ pathname: `/product/${product.slug}`, query: { id: `${product._id}` } }}
        >
          <ProductCard product={product} />
        </Link>
      ))}
      {!isLoading && filteredProducts?.length === 0 && (
        <Text gridColumn="1 / -1">No products found in this category.</Text>
      )}
      {!isLoading && visibleProducts.length < (filteredProducts?.length || 0) && (
        <Center gridColumn="1 / -1" py={6}>
          <Button colorScheme="green" onClick={() => setVisibleCount((count) => count + 20)}>
            Load more products
          </Button>
        </Center>
      )}
      <div ref={loadMoreRef} aria-hidden="true" />
    </SimpleGrid>
  );
};

export default ProductList;
