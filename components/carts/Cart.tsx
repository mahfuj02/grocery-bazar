// Cart.tsx
import useCartStore from "@/hooks/useCartStore";
import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import { VerticalCartButton } from "./CartButton";

const Cart = () => {
  const cartItems = useCartStore((s) => s.cartItems);
  const removeFromCart = useCartStore((s) => s.removeFromCart);

  const hanldeDeleteCartItem = (itemId: number) => {
    removeFromCart(itemId);
  };

  return (
    <Box>
      {cartItems.map((item) => (
        <>
          <Flex
            key={item.id}
            justifyContent="space-between"
            alignItems="center"
            mb={4}
          >
            {/* <CartButton cart=' /> */}
            <VerticalCartButton productId={item.id} quantity={item.quantity} />
            {/* <Box
            // height={'50px'}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderRadius="md"
            boxShadow='title'
            width='10%'
          >
            <VStack padding='-5px' gap={'1px'}>
            <IconButton
                aria-label="Increment"
                icon={<AddIcon boxSize='10px' />}
                // onClick={incrementQuantity}
                variant="unstyled"
              />
              <Box mx={1} fontWeight="300">
                 5
              </Box>
              <IconButton
                aria-label="Decrement"
                icon={<MinusIcon boxSize='10px'  />}
                // onClick={decrementQuantity}
                variant="unstyled"
              />
              
            </VStack>
          </Box> */}
            <Box width="50%">
              <Text fontSize="12px" fontWeight="400">
                {item.name}
              </Text>
              <Text fontSize={"10px"} fontWeight={600} textColor={"gray.500"}>
                {" "}
                tk75/100ml
              </Text>
            </Box>
            {/* <Text fontSize='12px' fontWeight='400'>{item.name}</Text> */}
            <Text textColor="secondary" fontWeight="600">
              tk.{item.price}
            </Text>
            <Box _hover={{ color: "red" }}>
              <AiOutlineClose
                cursor="pointer"
                onClick={() => hanldeDeleteCartItem(item.id)}
              />
            </Box>
          </Flex>
          <Divider />
        </>
      ))}
    </Box>
  );
};

export default Cart;
