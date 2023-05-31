import React from 'react'
import { Box, Flex, Image } from "@chakra-ui/react";
import logo from '../../public/logo.svg'
import Profile from "./Profile";
import SearchBox from "./SearchInput";

const Navbar = () => {

    const imageUrl = logo.src;

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      paddingY={3}
      paddingX={50}
      boxShadow="0px 0px 4px rgba(0, 0, 0, 0.1)"
    >
      {/* Logo */}
      <Box width="100px" height="30px">
        <Image src={imageUrl} alt="grocery logo" objectFit="contain" />
      </Box>

      {/* Search Box */}
      <SearchBox />

      {/* Login Button */}
      <Profile />
    </Flex>

    )
}

export default Navbar



