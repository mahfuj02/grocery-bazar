import { ChevronDownIcon } from "@chakra-ui/icons";
import {
    Button,
    Grid,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text
} from "@chakra-ui/react";
import { useState } from "react";
import { BiCheck } from "react-icons/bi";
import { Product } from "../products/ProductList";
import WeightSelector from "./WeightSelector";

interface Props {
  product?: Product;
}

const ProductInfo = ({ product }: Props) => {
  const [selectedOption, setSelectedOption] = useState("1 kg");

  return (
    <Grid bg="white" templateRows="repeat(3, auto)" gap={2} p={10}>
      {/* First Row */}
      <Grid templateColumns="1fr 1fr" gap={2}>
        {/* Left side: Title */}
        <Text fontWeight="bold">{product?.title}</Text>

        {/* Right side: Price */}
        <Text
          mt="4px"
          textAlign="right"
          textColor="secondary"
          fontSize="16px"
          fontWeight={700}
        >
          tk.{product?.price}
        </Text>
      </Grid>

      {/* Second Row */}
      <Grid templateColumns="1fr 1fr" gap={2}>

        <WeightSelector />

        <Button >Add to Cart</Button>
      </Grid>

      <Grid templateColumns="1fr" gap={2}>

        <Text fontWeight='bold'>Supplier: Grocery Bazar</Text>
      </Grid>
    </Grid>
  );
};

export default ProductInfo;
