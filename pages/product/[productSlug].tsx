import ImageGallery from "@/components/product_detail/ImageGallery";
import ProductInfo from "@/components/product_detail/ProductInfo";
import { products } from "@/components/products/ProductList";
import { convertSlug } from "@/services/convertToSlugt";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { useRouter } from "next/router";

const ProductDetailPage = () => {
  const router = useRouter();
  const { productSlug } = router.query;
  const product = products.find(
    (product) => convertSlug(product.title) === productSlug
  );
  return (
    <Box
      bg="mainPageBG"
      height="100vh"
      px={{ base: 20, md: 50 }}
      py={{ base: 30, md: 10 }}
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} gap="2px">
        <ImageGallery image={product?.image} title={product?.title} />
        <ProductInfo product={product} />
      </SimpleGrid>
    </Box>
  );
};

export default ProductDetailPage;
