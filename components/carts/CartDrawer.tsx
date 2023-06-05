import {
  Text,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Box,
  DrawerFooter,
  Button,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Cart from "./Cart";
import { FaShoppingBag } from "react-icons/fa";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: Props) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} size="sm">
      {/* <DrawerOverlay /> */}
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader bg="gray.100">
          <HStack>
            <FaShoppingBag /> <Text>7 ITEMS</Text>{" "}
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
