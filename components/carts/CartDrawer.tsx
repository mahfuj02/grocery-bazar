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
  VStack,
} from "@chakra-ui/react";
import { FaShoppingBag } from "react-icons/fa";
import Cart from "./Cart";
import useCartStore from "@/hooks/useCartStore";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: Props) => {

  const cartItems = useCartStore((s) => s.cartItems)
  const totalTk = useCartStore((s) => s.totalMoney)
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
          <Cart />
        </DrawerBody>
        <DrawerFooter>
          <VStack>
            <Box>
              <Button
                borderRightRadius="none"
                bg="secondary"
                textColor="white"
                _hover={{ bg: "secondary" }}
                isDisabled={cartItems.length === 0 ? true : false}
              >
                Place Order{" "}
              </Button>
              <Button
                isDisabled={cartItems.length === 0 ? true : false}
                borderLeftRadius="none"
                bg="#E04F54"
                textColor="white"
                _hover={{ bg: "#E04F54" }}
              >
                {totalTk}
              </Button>
            </Box>
          </VStack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
