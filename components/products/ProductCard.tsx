import { Product } from "@/utils/Product";
import { Box, Image, Text } from "@chakra-ui/react";
import CartButton from "../carts/CartButton";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  // if(!product)return;
  return (
    <Box bg="white" padding={2} maxW="sm" borderRadius="md" overflow="hidden">
      <Box display="flex" alignItems="center" justifyContent="center">
        <Image
          src={product?.image_url}
          alt={product?.product_name}
          objectFit="cover"
          h={200}
        />
      </Box>

      <Box p={4}>
        <Text
          fontWeight="bold"
          textAlign="center"
          mb={2}
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {product?.product_name}
        </Text>
        <Box display="flex" justifyContent="space-between" my="20px">
          <Text fontSize="13px" textColor="#77798C" fontWeight="bold">
            {product.weight[0]}
          </Text>
          <Text textColor="secondary" fontWeight="bold">
            tk.{product?.price}
          </Text>
        </Box>
      </Box>
      <Box px={4} pb={4} alignContent="center" justifyContent="center">
        <CartButton
          name={product.product_name}
          price={product.price}
          id={product._id}
        />
      </Box>
    </Box>
  );
};

export default ProductCard;
