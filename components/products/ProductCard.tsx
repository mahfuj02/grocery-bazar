import { Box, Text, Image, Button, SimpleGrid } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { BiCartAdd } from "react-icons/bi";
import { networkInterfaces } from "os";
import { Product } from "./ProductList";
import CartButton from "../carts/CartButton";

interface Props {
  product: Product;
}


const ProductCard = ({ product }: Props) => {

  // if(!product)return;
  console.log(" product package...",product)
  return (
    <Box bg="white" padding={2} maxW="sm" borderRadius="md" overflow="hidden">
      <Image
        src={product?.image}
        alt={product?.title}
        objectFit="cover"
        h={200}
      />
      <Box p={4}>
        <Text
          fontWeight="bold"
          textAlign="center"
          mb={2}
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {product?.title}
        </Text>
        <Box display="flex" justifyContent="space-between" my="20px">
          <Text fontSize="13px" textColor="#77798C" fontWeight="bold">
            {product?.weight}
          </Text>
          <Text textColor="secondary" fontWeight="bold">
            tk.{product?.price}
          </Text>
        </Box>
      </Box>
      <Box px={4} pb={4} alignContent='center' justifyContent='center'>
        <CartButton />
      </Box>
    </Box>
  );
};

export default ProductCard;
