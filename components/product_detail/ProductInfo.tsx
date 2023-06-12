import { Product } from "@/utils/Product";
import {
  Box,
  Grid,
  Text
} from "@chakra-ui/react";
import { useState } from "react";
import CartButton from "../carts/CartButton";
import WeightSelector from "./WeightSelector";

interface Props {
  product: Product;
}

const ProductInfo = ({ product }: Props) => {
  const randomPrice = Math.floor(Math.random() * (1000 - 10 + 1)) + 10;
  const newProduct = {
    ...product,
    price: randomPrice,
    weight: ["100mg", "500mg", "1kg"],
  };
  const [selectedOption, setSelectedOption] = useState("1 kg");

  return (
    <Grid bg="white" templateRows="repeat(3, auto)" gap={2} p={10}>
      {/* First Row */}
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 30%", lg: "1fr 1fr" }}
        gap={2}
      >
        {/* Left side: Title */}
        <Text fontWeight="bold">{newProduct?.product_name}</Text>

        {/* Right side: Price */}
        <Text
          mt="4px"
          textAlign={{ base: "left", md: "right" }}
          textColor="secondary"
          fontSize="16px"
          fontWeight={700}
        >
          tk.{newProduct?.price}
        </Text>
      </Grid>

      {/* Second Row */}
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={2}>
        <Box width={{ base: "100%" }}>
          <WeightSelector weight={newProduct.weight} />
        </Box>
        <Box width={{ base: "50%", lg: "100%" }}>
          <CartButton name={newProduct?.product_name} price={newProduct.price} id={newProduct?._id} />
        </Box>
      </Grid>

      <Grid templateColumns="1fr" gap={2}>
        <Text fontWeight="bold">Supplier: Grocery Bazar</Text>
      </Grid>
    </Grid>
  );
};

export default ProductInfo;