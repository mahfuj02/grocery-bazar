import ImageGallery from "@/components/product_detail/ImageGallery";
import ProductInfo from "@/components/product_detail/ProductInfo";
// import { products } from "@/components/products/ProductList";
import { convertSlug } from "@/utils/helper";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { NextPageContext } from "next";
import { useRouter } from "next/router";
import { title } from "process";

export const products = [
  {
    title: "ACI Suji 250gm",
    description: "100% Pure Coconut Oil",
    weight: ["500ml"],
    price: 9.99,
    total: 5,
    slug: convertSlug(title),
    image:
      "https://shatkora.sgp1.cdn.digitaloceanspaces.com/media/products/8153003000385.webp",
  },
  {
    title: "Junior Children Tooth paste Orange Flavor",
    description: "Fresh and Nutritious Beef Liver",
    weight: "250g",
    price: 12.99,
    total: 10,
    slug: convertSlug(title),
    image:
      "https://shatkora.sgp1.cdn.digitaloceanspaces.com/media/products/Product-junior.png",
  },
  {
    title: "Coconut Biscuits",
    slug: convertSlug(title),
    description: "Crunchy Coconut Flavored Biscuits",
    weight: "200g",
    price: 4.99,
    total: 15,
    image: "path/to/coconut-biscuits.jpg",
  },
  // Add more products here...
  {
    title: "Special Chana 1no 1kg",
    slug: convertSlug(title),
    description: "Lorem ipsum dolor sit amet.",
    weight: "500g",
    price: 9.99,
    total: 3,
    image:
      "https://shatkora.sgp1.cdn.digitaloceanspaces.com/media/products/Special_Chana_1no_1kg.webppath/to/product4-image.jpg",
  },
  {
    title: "ACI Pure Musur Dal (No 2) 1kg",
    slug: convertSlug(title),
    description: "Lorem ipsum dolor sit amet.",
    weight: "250g",
    price: 12.99,
    total: 7,
    image:
      "https://shatkora.sgp1.cdn.digitaloceanspaces.com/media/products/Untitled_wb00Neg.png",
  },
  {
    title: "Radhuni Chotpoti Mosla 50gm",
    slug: convertSlug(title),
    description: "Lorem ipsum dolor sit amet.",
    weight: "200g",
    price: 4.99,
    total: 12,
    image:
      "https://shatkora.sgp1.cdn.digitaloceanspaces.com/media/products/8941100511053.webp",
  },
  {
    title: "Pran Halim Mix 200gm",
    slug: convertSlug(title),
    description: "Lorem ipsum dolor sit amet.",
    weight: "500g",
    price: 9.99,
    total: 8,
    image:
      "https://shatkora.sgp1.cdn.digitaloceanspaces.com/media/products/halim_mix.jpg",
  },
  {
    title: "Radhuni Kheer Mix 150gm",
    slug: convertSlug(title),
    description: "Lorem ipsum dolor sit amet.",
    weight: "250g",
    price: 12.99,
    total: 2,
    image:
      "https://shatkora.sgp1.cdn.digitaloceanspaces.com/media/products/kheer.jpg",
  },
  {
    title: "Broiler Chicken 2kg(+-100gm)",
    slug: convertSlug(title),
    description: "Lorem ipsum dolor sit amet.",
    weight: "200g",
    price: 4.99,
    total: 6,
    image:
      "https://shatkora.sgp1.cdn.digitaloceanspaces.com/media/products/Broilar_xdRF7Qg.webp",
  },
  {
    title: "Beef Liver Bengal Meat",
    slug: convertSlug(title),
    description: "Lorem ipsum dolor sit amet.",
    weight: "500g",
    price: 9.99,
    total: 9,
    image:
      "https://shatkora.sgp1.cdn.digitaloceanspaces.com/media/products/beef_liver1.jpg",
  },
  {
    title: "Beef Boneless (Net Weight ± 50 gm)",
    slug: convertSlug(title),
    description: "Lorem ipsum dolor sit amet.",
    weight: "250g",
    price: 12.99,
    total: 4,
    image:
      "https://shatkora.sgp1.cdn.digitaloceanspaces.com/media/products/Beef_Boneless_Net_Weight__50_gm.webp",
  },
  {
    title: "Pabda Small-Medium Size (20-25pcs/ half kg) +-50gm",
    slug: convertSlug(title),
    description: "Lorem ipsum dolor sit amet.",
    weight: "200g",
    price: 4.99,
    total: 1,
    image:
      "https://shatkora.sgp1.cdn.digitaloceanspaces.com/media/products/pabda-l_1.webp",
  },
  {
    title: "Rui Fish 2kg (+-100gm) 380Tk/Kg",
    slug: convertSlug(title),
    description: "Lorem ipsum dolor sit amet.",
    weight: "500g",
    price: 9.99,
    total: 11,
    image:
      "https://shatkora.sgp1.cdn.digitaloceanspaces.com/media/products/RUIS_8XCnSGO.jpg",
  },
  {
    title: "Bashundhara Pocket Tissue",
    slug: convertSlug(title),
    description: "Lorem ipsum dolor sit amet.",
    weight: "250g",
    price: 12.99,
    total: 6,
    image:
      "https://shatkora.sgp1.cdn.digitaloceanspaces.com/media/products/tissue.jpg",
  },
  {
    title: "Product 15",
    slug: convertSlug(title),
    description: "Beef Shami Kebab 280gm (Bengal Meat)",
    weight: "200g",
    price: 4.99,
    total: 3,
    image:
      "https://shatkora.sgp1.cdn.digitaloceanspaces.com/media/products/image-removebg-preview_3.png",
  },
];

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
