import useCartStore from "@/hooks/useCartStore";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Box, IconButton, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface VerticalButtonProps {
  productId: number;
  quantity: number;
}

interface CartButtonProps {
  name: string;
  price: number;
  id: number;
}

export const VerticalCartButton = ({
  productId,
  quantity,
}: VerticalButtonProps) => {
  const incrementQuantity = useCartStore((s) => s.incrementQuantity);
  const decrementQuantity = useCartStore((s) => s.decrementQuantity);

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
          onClick={() => incrementQuantity(productId)}
          variant="unstyled"
        />
        <Box mx={1} fontWeight="300">
          {quantity}
        </Box>
        <IconButton
          aria-label="Decrement"
          icon={<MinusIcon boxSize="10px" />}
          onClick={() => decrementQuantity(productId)}
          variant="unstyled"
        />
      </VStack>
    </Box>
  );
};

const CartButton = ({ name, price, id }: CartButtonProps): JSX.Element => {
  const [quantity, setQuantity] = useState(0);

  const {
    cartItems,
    incrementQuantity,
    decrementQuantity,
    addToCart,
    removeFromCart,
  } = useCartStore();

  useEffect(() => {
    let data = cartItems.find((item) => item.id === id)?.quantity;
    if (data === undefined) data = 0;
    setQuantity(data);
  }, [cartItems, id, quantity]);

  useEffect(() => {
    if (quantity <= 0) removeFromCart(id);
  }, [id, quantity, removeFromCart]);

  const handleFirstCartButtonClick = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    event.preventDefault();
    const product = {
      id,
      name,
      price,
      quantity,
    };
    addToCart(product);
    incrementQuantity(id);
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
        onClick={() => decrementQuantity(id)}
        variant="unstyled"
        color="white"
      />
      <Box mx={2} fontWeight="bold" color="white">
        {quantity}
      </Box>
      <IconButton
        aria-label="Increment"
        icon={<AddIcon />}
        onClick={() => incrementQuantity(id)}
        variant="unstyled"
        color="white"
      />
    </Box>
  );
};

export default CartButton;
