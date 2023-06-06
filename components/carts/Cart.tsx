// Cart.tsx
import { Box, Divider, Flex, IconButton, Text, VStack } from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import CartButton, { VerticalCartButton } from "./CartButton";
import { useState } from "react";

const cartItemList = [
  { id: 1, name: "Junior Children Tooth paste Orange Flavor", price: 10 },
  {
    id: 2,
    name: " lavor  orange chips Junior Children Tooth paste Orange F",
    price: 15,
  },
  { id: 3, name: "Frutiak pran mangoo", price: 20 },
  { id: 4, name: "Product 1", price: 10 },
  { id: 5, name: "Product 2", price: 15 },
  { id: 6, name: "Product 3", price: 20 },
  { id: 7, name: "Product 1", price: 10 },
];

const Cart: React.FC = () => {
  // Replace with your actual cart items data
  const [cartItems, setCartItems] = useState(cartItemList);

  const hanldeDeleteCartItem = (itemId: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
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
            <VerticalCartButton />
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
              tk.300
            </Text>
            <Box _hover={{color:'red'}}>
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
