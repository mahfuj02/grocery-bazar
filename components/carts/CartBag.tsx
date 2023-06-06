import {
  Box,
  Button,
  HStack,
  Icon,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaShoppingBag } from "react-icons/fa";

import { useState } from "react";
import CartDrawer from "./CartDrawer";

export interface CartItem {
  id: number;
  name: string;
  price: number;
}

export const cartItemList = [
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
const CartBag = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cartItems, setCartItems] = useState<CartItem[]>(cartItemList);

  return (
    <>
      <Box
        position="fixed"
        top={"45%"}
        right={"0%"}
        width={"120px"}
        height={"100px"}
        borderLeftRadius={5}
        bg="secondary"
        display="flex"
        padding={"5px"}
        justifyContent="center"
        boxShadow="rgba(0, 0, 0, 0.16) 0px 21px 36px"
        zIndex={999}
        onClick={onOpen}
      >
        <Button variant="unstyled" justifyContent="space-between">
          <HStack spacing={2} marginBottom={"20px"}>
            <Icon as={FaShoppingBag} boxSize={"16px"} color="white" />
            <Text textColor="white" fontWeight="700">
              10 Items
            </Text>
          </HStack>
          <Box
            bg="white"
            color="secondary"
            width={"100%"}
            borderRadius="6px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="16px"
            fontWeight="bold"
            padding={"2px"}
          >
            tk<Text>0.00</Text>
          </Box>
        </Button>
      </Box>
      <CartDrawer
        isOpen={isOpen}
        onClose={onClose}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </>
  );
};

export default CartBag;
