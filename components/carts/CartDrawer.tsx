import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  HStack,
  Text,
  VStack
} from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { FaShoppingBag } from "react-icons/fa";
import Cart from "./Cart";
import { CartItem } from "./CartBag";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  setCartItems: Dispatch<SetStateAction<CartItem[]>>;
}

const CartDrawer = ({ isOpen, onClose, cartItems, setCartItems }: Props) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} size="sm">
      {/* <DrawerOverlay /> */}
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader bg="gray.100">
          <HStack>
            <FaShoppingBag />{" "}
            <Text>
              {" "}
              {cartItems.length <= 1
                ? `${cartItems.length} Item`
                : `${cartItems.length} Items`}{" "}
            </Text>{" "}
          </HStack>
          <Text fontSize="12px" fontWeight="300">
            Groceries Delivered in 90 minutes
          </Text>
        </DrawerHeader>
        <DrawerBody overflowY={"scroll"}>
          <Cart cartItems={cartItems} setCartItems={setCartItems} />
        </DrawerBody>
        <DrawerFooter>
          <VStack>
            <Box>
              <Button
                borderRightRadius="none"
                bg="secondary"
                textColor="white"
                _hover={{ bg: "secondary" }}
              >
                Place Order{" "}
              </Button>
              <Button
                borderLeftRadius="none"
                bg="#E04F54"
                textColor="white"
                _hover={{ bg: "#E04F54" }}
              >
                tk.12,000
              </Button>
            </Box>
          </VStack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
