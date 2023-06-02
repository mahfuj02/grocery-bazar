import { Box, Flex, Show, Text } from "@chakra-ui/react";

import Logo from "../Logo";
import Profile from "./Profile";
import SearchBox from "./SearchInput";
import Sidebar from "../Sidebar";

const Navbar = () => {
  return (
    <Box textAlign="center">
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        paddingY={3}
        paddingX={50}
        boxShadow="0px 0px 4px rgba(0, 0, 0, 0.1)"
      >
        {/* Toggle Category List */}
        <Show below="lg" ><Sidebar /> </Show>

        {/* Logo */}
        <Box width="100px" height="30px">
          <Logo />
        </Box>

        {/* Search Box */}
        <Show breakpoint="(min-width: 993px)">
          <SearchBox />
        </Show>
        {/* Login Button */}
        <Profile />
      </Flex>

      <Show below="lg">
        <Text marginY={5}> Groceries Delivered in 90 Minutes</Text>
        <Box marginX={50}>
          <SearchBox />
        </Box>{" "}
      </Show>
    </Box>
  );
};

export default Navbar;
