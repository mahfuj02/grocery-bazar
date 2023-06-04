import { useState } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

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

  if (!quantity) {
    return (
      <Box
        display="flex"
        justifyContent='center'
        alignItems="center"
        border="1px solid"
        borderColor="secondary"
        width="100%"
        height="36px"
        borderRadius="md"
        cursor='pointer'
        onClick={incrementQuantity}

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
