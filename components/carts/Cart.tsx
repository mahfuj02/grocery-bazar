// Cart.tsx
import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CartItem } from "./CartBag";
import { VerticalCartButton } from "./CartButton";

interface Props {
  cartItems: CartItem[];
  setCartItems: Dispatch<SetStateAction<CartItem[]>>;
}

const Cart = ({ cartItems, setCartItems }: Props) => {
  // Replace with your actual cart items data
  // const [cartItems, setCartItems] = useState(cartItemList);

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
