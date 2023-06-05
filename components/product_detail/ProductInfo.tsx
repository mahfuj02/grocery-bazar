import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Grid,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { BiCheck } from "react-icons/bi";
import { Product } from "../products/ProductList";
import WeightSelector from "./WeightSelector";
import CartButton from "../carts/CartButton";

interface Props {
  product?: Product;
}

const ProductInfo = ({ product }: Props) => {
  const [selectedOption, setSelectedOption] = useState("1 kg");

  return (
    <Grid bg="white" templateRows="repeat(3, auto)" gap={2} p={10}>
      {/* First Row */}
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 30%", lg: "1fr 1fr" }}
        gap={2}
      >
        {/* Left side: Title */}
        <Text fontWeight="bold">{product?.title}</Text>

        {/* Right side: Price */}
        <Text
          mt="4px"
          textAlign={{ base: "left", md: "right" }}
          textColor="secondary"
          fontSize="16px"
          fontWeight={700}
        >
          tk.{product?.price}
        </Text>
      </Grid>

      {/* Second Row */}
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={2}>
        <Box width={{base:'100%'}}>
          <WeightSelector />
        </Box>
        <Box width={{base:'50%', lg:'100%'}}>
          <CartButton />
        </Box>
      </Grid>

      <Grid templateColumns="1fr" gap={2}>
        <Text fontWeight="bold">Supplier: Grocery Bazar</Text>
      </Grid>
    </Grid>
  );
};

export default ProductInfo;
