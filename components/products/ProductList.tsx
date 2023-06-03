import React from "react";
import ProductCard from "./ProductCard";
import product1 from "../../../public/Sepnil_Sanitizer_100ml.webp";

export interface Product {
  title: string;
  description: string;
  weight: string;
  price: number;
  total: number;
  image: string;
}

const ProductList = () => {
  const products = [
    {
      title: "Parachute Oil",
      description: "100% Pure Coconut Oil",
      weight: "500ml",
      price: 9.99,
      total: 5,
      image: "path/to/parachute-oil.jpg",
    },
    {
      title: "Beef Liver",
      description: "Fresh and Nutritious Beef Liver",
      weight: "250g",
      price: 12.99,
      total: 10,
      image: "path/to/beef-liver.jpg",
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
      title: "Product 4",
      description: "Lorem ipsum dolor sit amet.",
      weight: "500g",
      price: 9.99,
      total: 3,
      image: "path/to/product4-image.jpg",
    },
    {
      title: "Product 5",
      description: "Lorem ipsum dolor sit amet.",
      weight: "250g",
      price: 12.99,
      total: 7,
      image: "path/to/product5-image.jpg",
    },
    {
      title: "Product 6",
      description: "Lorem ipsum dolor sit amet.",
      weight: "200g",
      price: 4.99,
      total: 12,
      image: "path/to/product6-image.jpg",
    },
    {
      title: "Product 7",
      description: "Lorem ipsum dolor sit amet.",
      weight: "500g",
      price: 9.99,
      total: 8,
      image: "path/to/product7-image.jpg",
    },
    {
      title: "Product 8",
      description: "Lorem ipsum dolor sit amet.",
      weight: "250g",
      price: 12.99,
      total: 2,
      image: "path/to/product8-image.jpg",
    },
    {
      title: "Product 9",
      description: "Lorem ipsum dolor sit amet.",
      weight: "200g",
      price: 4.99,
      total: 6,
      image: "path/to/product9-image.jpg",
    },
    {
      title: "Product 10",
      description: "Lorem ipsum dolor sit amet.",
      weight: "500g",
      price: 9.99,
      total: 9,
      image: "path/to/product10-image.jpg",
    },
    {
      title: "Product 11",
      description: "Lorem ipsum dolor sit amet.",
      weight: "250g",
      price: 12.99,
      total: 4,
      image: "path/to/product11-image.jpg",
    },
    {
      title: "Product 12",
      description: "Lorem ipsum dolor sit amet.",
      weight: "200g",
      price: 4.99,
      total: 1,
      image: "path/to/product12-image.jpg",
    },
    {
      title: "Product 13",
      description: "Lorem ipsum dolor sit amet.",
      weight: "500g",
      price: 9.99,
      total: 11,
      image: "path/to/product13-image.jpg",
    },
    {
      title: "Product 14",
      description: "Lorem ipsum dolor sit amet.",
      weight: "250g",
      price: 12.99,
      total: 6,
      image: "path/to/product14-image.jpg",
    },
    {
      title: "Product 15",
      description: "Lorem ipsum dolor sit amet.",
      weight: "200g",
      price: 4.99,
      total: 3,
      image: "path/to/product15-image.jpg",
    },
  ];

  return (
    <>
      {products.map((product, index) => {
        // <ProductCard product={product} />;
      })}
    </>
  );
};

export default ProductList;
