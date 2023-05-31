import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";

const SearchBox = () => {
  return (
    <form onSubmit={() => {}}>
      <InputGroup border="1px solid #37B063" borderRadius="6px" size="lg">
        <InputLeftAddon bg="background" border="none">
          <Box
            backgroundColor="#F7F7F7"
            textColor="#37B063"
            fontSize="14px"
            fontWeight="700"
            lineHeight="38px"
            paddingX="15px"
            marginLeft={-3}
            borderRadius="6px"
            whiteSpace="nowrap"
          >
            Grocery
          </Box>
        </InputLeftAddon>
        <Input
          border="none"
          placeholder="Search your products from here"
          _placeholder={{ color: "gray.500", fontSize: "14px" }}
        />
        <InputRightAddon bg="background" border="none">
          <Box
            backgroundColor="#37B063"
            textColor="#ffff"
            marginRight="-17px"
            borderRightRadius="6px"
          >
            <Button
              bg="#37B063"
              textColor="white"
              size="lg"
              width="105px"
              borderLeft="none"
              borderRight="20px"
              _hover={{ bg: "#37B063" }}
            >
              <SearchIcon marginX={2} />
              Search
            </Button>
          </Box>
        </InputRightAddon>
      </InputGroup>
    </form>
  );
};

export default SearchBox;
