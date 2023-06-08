import ImageGallery from "@/components/product_detail/ImageGallery";
import ProductInfo from "@/components/product_detail/ProductInfo";
import useProduct from "@/hooks/useProduct";
// import { products } from "@/components/products/ProductList";
import { convertSlug } from "@/utils/helper";
import { Box, SimpleGrid, Spinner } from "@chakra-ui/react";
import { NextPageContext } from "next";
import { useRouter } from "next/router";
import { title } from "process";

const ProductDetailPage = () => {
  const router = useRouter();
  const id = router.query.id as string;
  console.log("id is a string: ", id);
  const { data, error, isLoading } = useProduct(id);
  const product = data?.product;
  // const product = products.find(
  //   (product) => convertSlug(product.) === productSlug
  // );
  if (isLoading) return <Spinner />;
  if (error) null;
  return (
    <Box
      bg="mainPageBG"
      height="100vh"
      px={{ base: 1, md: 50 }}
      py={{ base: 30, md: 10 }}
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} gap="2px">
        <ImageGallery
          image={product?.image_url}
          title={product?.product_name}
        />
        <ProductInfo product={product} />
      </SimpleGrid>
    </Box>
  );
};

ProductDetailPage.getInitialProps = async (ctx: NextPageContext) => {
  const { pathname } = ctx;

  // Extract the page name from the pathname or customize it as needed
  const pageName = "productDetailPage";

  // Pass the page name as a prop to the _app.tsx file
  return { pageName };
};

export default ProductDetailPage;
