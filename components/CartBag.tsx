import { Text, Box, Button, Icon, HStack } from "@chakra-ui/react";
import { FaShoppingBag } from "react-icons/fa";

import React from "react";

const CartBag = () => {
  return (
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
          tk.10000
        </Box>
      </Button>
    </Box>
  );
};

export default CartBag;
