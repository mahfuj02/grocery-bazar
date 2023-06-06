import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Box, IconButton, VStack } from "@chakra-ui/react";
import { useState } from "react";

export const VerticalCartButton = () => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleFirstCartButtonClick = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    event.preventDefault();
    incrementQuantity();
  };

  const handleCartButtonClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    // incrementQuantity();
  };
  return (
    <Box
      // height={'50px'}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="md"
      boxShadow="title"
      width="10%"
    >
      <VStack padding="-5px" gap={"1px"}>
        <IconButton
          aria-label="Increment"
          icon={<AddIcon boxSize="10px" />}
          onClick={incrementQuantity}
          variant="unstyled"
        />
        <Box mx={1} fontWeight="300">
          {quantity}
        </Box>
        <IconButton
          aria-label="Decrement"
          icon={<MinusIcon boxSize="10px" />}
          onClick={decrementQuantity}
          variant="unstyled"
        />
      </VStack>
    </Box>
  );
};

const CartButton = (): JSX.Element => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleFirstCartButtonClick = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    event.preventDefault();
    incrementQuantity();
  };

  const handleCartButtonClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    // incrementQuantity();
  };

  if (!quantity) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        border="1px solid"
        borderColor="secondary"
        width="100%"
        height="36px"
        borderRadius="md"
        cursor="pointer"
        onClick={handleFirstCartButtonClick}
      >
        <Box mx={2} textAlign="center" fontWeight="bold" textColor="secondary">
          Add to Cart
        </Box>
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      border="1px solid"
      borderColor="secondary"
      width="100%"
      height="36px"
      borderRadius="md"
      bg={quantity ? "secondary" : "background"}
      onClick={handleCartButtonClick}
    >
      <IconButton
        aria-label="Decrement"
        icon={<MinusIcon />}
        onClick={decrementQuantity}
        variant="unstyled"
        color="white"
      />
      <Box mx={2} fontWeight="bold" color="white">
        {quantity}
      </Box>
      <IconButton
        aria-label="Increment"
        icon={<AddIcon />}
        onClick={incrementQuantity}
        variant="unstyled"
        color="white"
      />
    </Box>
  );
};

export default CartButton;
