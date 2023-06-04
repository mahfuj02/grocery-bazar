import { ChevronDownIcon } from "@chakra-ui/icons";
import {
    Button,
    Grid,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text
} from "@chakra-ui/react";
import { useState } from "react";
import { BiCheck } from "react-icons/bi";
import { Product } from "../products/ProductList";

interface Props {
  product?: Product;
}

const ProductInfo = ({ product }: Props) => {
  const [selectedOption, setSelectedOption] = useState("1 kg");

  return (
    <Grid bg="white" templateRows="repeat(3, auto)" gap={2} p={10}>
      {/* First Row */}
      <Grid templateColumns="1fr 1fr" gap={2}>
        {/* Left side: Title */}
        <Text fontWeight="bold">{product?.title}</Text>

        {/* Right side: Price */}
        <Text
          mt="4px"
          textAlign="right"
          textColor="secondary"
          fontSize="16px"
          fontWeight={700}
        >
          tk.{product?.price}
        </Text>
      </Grid>

      {/* Second Row */}
      <Grid templateColumns="1fr 1fr" gap={2}>
        {/* Left side: Shop Name */}
        <Menu >
          <MenuButton
            as={Button}
            size='sm'
            width='40%'
            border="1px"
            borderColor="secondary"
            textColor="secondary"
            fontWeight="700"
            bg="background"
            _expanded={{ bg: 'background' }}
            _hover={{bg:'background'}}
          >
            {selectedOption}
            <ChevronDownIcon ml="10px" color="secondary" />
          </MenuButton>
          <MenuList>
            <MenuItem
              fontWeight='700'
              textColor='#77798C'
              onClick={() => setSelectedOption("500 mg")}
              color={selectedOption === "500 mg" ? "secondary" : "#77798C"}
              _hover={{ color: "secondary" }}
            >
              500 mg
              {selectedOption === "500 mg" && <BiCheck color="secondary" />}
            </MenuItem>
            <MenuItem
              fontWeight='700'
              onClick={() => setSelectedOption("100 mg")}
              color={selectedOption === "100 mg" ? "green" : "#77798C"}
              _hover={{ color: "secondary" }}
            >
              100 mg
              {selectedOption === "100 mg" && <BiCheck color="secondary" />}
            </MenuItem>
            
            
          </MenuList>
        </Menu>

        {/* Right side: Cart Button */}
        <Button colorScheme="blue">Add to Cart</Button>
      </Grid>

      {/* Third Row */}
      <Grid templateColumns="1fr" gap={2}>
        {/* Selection Type */}
        <Text>Supplier: Grocery Bazar</Text>
      </Grid>
    </Grid>
  );
};

export default ProductInfo;
