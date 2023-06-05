import React from "react";
import ProductCard from "./ProductCard";
import { SimpleGrid } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { title } from "process";
import { convertSlug } from "@/utils/helper";

export interface Product {
  title: string;
  description: string;
  weight: string;
  price: number;
  total: number;
  slug: string;
  image: string;
}
export const products: Product[] = [
  {
    title: "ACI Suji 250gm",
    description: "100% Pure Coconut Oil",
    weight: "500ml",
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

const ProductList = () => {
  
  return (
    <SimpleGrid columns={{ base: 2, md: 3 }} spacing={{base:1, md:4}} >
      {products.map((product, index) => (
        <Link
          textDecoration='none'
          _hover={{textDecoration:'none'}}
          key={index}
          href={`/product/${convertSlug(product.title)}`}

        >
          <ProductCard product={product} />
        </Link>
      ))}
    </SimpleGrid>
  );
};

export default ProductList;
