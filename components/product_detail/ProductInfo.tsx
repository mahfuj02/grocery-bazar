import { Product } from "@/utils/Product";
import {
  Box,
  Grid,
  Text,
  Badge,
} from "@chakra-ui/react";
import CartButton from "../carts/CartButton";
import WeightSelector from "./WeightSelector";

interface Props {
  product: Product;
}

const ProductInfo = ({ product }: Props) => {
  return (
    <Grid bg="white" templateRows="repeat(3, auto)" gap={2} p={10}>
      {/* First Row */}
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 30%", lg: "1fr 1fr" }}
        gap={2}
      >
        {/* Left side: Title */}
        <Text fontWeight="bold" fontSize="xl">{product.product_name}</Text>

        {/* Right side: Price */}
        <Text
          mt="4px"
          textAlign={{ base: "left", md: "right" }}
          textColor="secondary"
          fontSize="16px"
          fontWeight={700}
        >
          tk.{product.price}
        </Text>
      </Grid>

      {/* Second Row */}
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={2}>
        <Box width={{ base: "100%" }}>
          <WeightSelector weight={product.weight} />
        </Box>
        <Box width={{ base: "50%", lg: "100%" }}>
          <CartButton name={product.product_name} price={product.price} id={product._id} />
        </Box>
      </Grid>

      <Grid templateColumns="1fr" gap={2}>
        <Badge width="fit-content" colorScheme="green">{product.category || "Grocery"}</Badge>
        <Text color="gray.600">{product.description}</Text>
        <Text fontWeight="bold">Available: {product.inventory ?? "In stock"}</Text>
        <Text fontWeight="bold">Supplier: Grocery Bazar</Text>
      </Grid>
    </Grid>
  );
};

export default ProductInfo;