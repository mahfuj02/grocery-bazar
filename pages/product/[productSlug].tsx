import ImageGallery from "@/components/product_detail/ImageGallery";
import ProductInfo from "@/components/product_detail/ProductInfo";
import { products } from "@/components/products/ProductList";
import { convertSlug } from "@/utils/helper";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { NextPageContext } from "next";
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
      px={{ base: 1, md: 50 }}
      py={{ base: 30, md: 10 }}
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} gap="2px">
        <ImageGallery image={product?.image} title={product?.title} />
        <ProductInfo product={product} />
      </SimpleGrid>
    </Box>
  );
};

ProductDetailPage.getInitialProps = async (ctx: NextPageContext) => {
  const { pathname } = ctx;

  // Extract the page name from the pathname or customize it as needed
  const pageName = 'productDetailPage';

  // Pass the page name as a prop to the _app.tsx file
  return { pageName };
};


export default ProductDetailPage;
