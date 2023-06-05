// Cart.tsx
import { Box, Flex, Text } from "@chakra-ui/react";

const Cart: React.FC = () => {
  // Replace with your actual cart items data
  const cartItems = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 15 },
    { id: 3, name: "Product 3", price: 20 },
  ];

  return (
    <Box>
      {cartItems.map((item) => (
        <Flex key={item.id} justifyContent="space-between" alignItems="center" mb={4}>
          <Text>{item.name}</Text>
          <Text>${item.price}</Text>
        </Flex>
      ))}
    </Box>
  );
};

export default Cart;
