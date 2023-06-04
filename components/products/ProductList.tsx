import React from "react";
import ProductCard from "./ProductCard";
import product1 from "../../../public/Sepnil_Sanitizer_100ml.webp";
import { SimpleGrid } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

export interface Product {
  title: string;
  description: string;
  weight: string;
  price: number;
  total: number;
  image: string;
}

const ProductList = () => {
  const products: Product[] = [
    {
      title: "ACI Suji 250gm",
      description: "100% Pure Coconut Oil",
      weight: "500ml",
      price: 9.99,
      total: 5,
      image:
        "https://shatkora.sgp1.cdn.digitaloceanspaces.com/media/products/8153003000385.webp",
    },
    {
      title: "Junior Children Tooth paste Orange Flavor",
      description: "Fresh and Nutritious Beef Liver",
      weight: "250g",
      price: 12.99,
      total: 10,
      image:
        "https://shatkora.sgp1.cdn.digitaloceanspaces.com/media/products/Product-junior.png",
    },
    {
      title: "Coconut Biscuits",
      description: "Crunchy Coconut Flavored Biscuits",
      weight: "200g",
      price: 4.99,
      total: 15,
      image: "path/to/coconut-biscuits.jpg",
    },
    // Add more products here...
    {
      title: "Special Chana 1no 1kg",
      description: "Lorem ipsum dolor sit amet.",
      weight: "500g",
      price: 9.99,
      total: 3,
      image:
        "https://shatkora.sgp1.cdn.digitaloceanspaces.com/media/products/Special_Chana_1no_1kg.webppath/to/product4-image.jpg",
    },
    {
      title: "ACI Pure Musur Dal (No 2) 1kg",
      description: "Lorem ipsum dolor sit amet.",
      weight: "250g",
      price: 12.99,
      total: 7,
      image:
        "https://shatkora.sgp1.cdn.digitaloceanspaces.com/media/products/Untitled_wb00Neg.png",
    },
    {
      title: "Radhuni Chotpoti Mosla 50gm",
      description: "Lorem ipsum dolor sit amet.",
      weight: "200g",
      price: 4.99,
      total: 12,
      image:
        "https://shatkora.sgp1.cdn.digitaloceanspaces.com/media/products/8941100511053.webp",
    },
    {
      title: "Pran Halim Mix 200gm",
      description: "Lorem ipsum dolor sit amet.",
      weight: "500g",
      price: 9.99,
      total: 8,
      image:
        "https://shatkora.sgp1.cdn.digitaloceanspaces.com/media/products/halim_mix.jpg",
    },
    {
      title: "Radhuni Kheer Mix 150gm",
      description: "Lorem ipsum dolor sit amet.",
      weight: "250g",
      price: 12.99,
      total: 2,
      image:
        "https://shatkora.sgp1.cdn.digitaloceanspaces.com/media/products/kheer.jpg",
    },
    {
      title: "Broiler Chicken 2kg(+-100gm)",
      description: "Lorem ipsum dolor sit amet.",
      weight: "200g",
      price: 4.99,
      total: 6,
      image:
        "https://shatkora.sgp1.cdn.digitaloceanspaces.com/media/products/Broilar_xdRF7Qg.webp",
    },
    {
      title: "Beef Liver Bengal Meat",
      description: "Lorem ipsum dolor sit amet.",
      weight: "500g",
      price: 9.99,
      total: 9,
      image:
        "https://shatkora.sgp1.cdn.digitaloceanspaces.com/media/products/beef_liver1.jpg",
    },
    {
      title: "Beef Boneless (Net Weight ± 50 gm)",
      description: "Lorem ipsum dolor sit amet.",
      weight: "250g",
      price: 12.99,
      total: 4,
      image:
        "https://shatkora.sgp1.cdn.digitaloceanspaces.com/media/products/Beef_Boneless_Net_Weight__50_gm.webp",
    },
    {
      title: "Pabda Small-Medium Size (20-25pcs/ half kg) +-50gm",
      description: "Lorem ipsum dolor sit amet.",
      weight: "200g",
      price: 4.99,
      total: 1,
      image:
        "https://shatkora.sgp1.cdn.digitaloceanspaces.com/media/products/pabda-l_1.webp",
    },
    {
      title: "Rui Fish 2kg (+-100gm) 380Tk/Kg",
      description: "Lorem ipsum dolor sit amet.",
      weight: "500g",
      price: 9.99,
      total: 11,
      image:
        "https://shatkora.sgp1.cdn.digitaloceanspaces.com/media/products/RUIS_8XCnSGO.jpg",
    },
    {
      title: "Bashundhara Pocket Tissue",
      description: "Lorem ipsum dolor sit amet.",
      weight: "250g",
      price: 12.99,
      total: 6,
      image:
        "https://shatkora.sgp1.cdn.digitaloceanspaces.com/media/products/tissue.jpg",
    },
    {
      title: "Product 15",
      description: "Beef Shami Kebab 280gm (Bengal Meat)",
      weight: "200g",
      price: 4.99,
      total: 3,
      image:
        "https://shatkora.sgp1.cdn.digitaloceanspaces.com/media/products/image-removebg-preview_3.png",
    },
  ];
  const convertSlug = (title:string) => {
    const separator = "-"; // You can use any separator character
  
  // Remove leading/trailing spaces and convert to lowercase
  let slug = title.trim().toLowerCase();
  
  // Replace spaces with separator
  slug = slug.replace(/\s+/g, separator);
  
  // Remove non-alphanumeric characters (except separator)
  slug = slug.replace(/[^a-z0-9-]/g, "");
  
  // Remove consecutive occurrences of separator
  slug = slug.replace(new RegExp(`${separator}+`, "g"), separator);
  
  // Trim to desired length (e.g., 50 characters)
  slug = slug.slice(0, 50);
  
  return slug;
  }
  
  return (
    <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4}>
      {products.map((product, index) => (
        <Link
          key={index}
          href={`/product/${convertSlug(product.title)}`}
          // as={`/product/${convertSlug(product.title)}`}
        >
          <ProductCard product={product} />
        </Link>
      ))}
    </SimpleGrid>
  );
};

export default ProductList;
