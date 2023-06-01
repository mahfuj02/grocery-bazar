import { MenuItem, Flex, Box, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  text: string;
  icon: React.ReactNode;
  handleGoogleLogin?: () => void;
}

const CustomMenuItem = ({ icon, text, handleGoogleLogin }: Props) => {
  return (
    <>
      {text === "Logout" ? (
        <MenuItem onClick={handleGoogleLogin}>
          <Flex align="center">
            <Box fontSize={20} mr={2}>
              {icon}
            </Box>
            <Text fontWeight={600} _hover={{ textColor: "#37B063" }}>
              {text}
            </Text>
          </Flex>
        </MenuItem>
      ) : (
        <MenuItem>
          <Flex align="center">
            <Box fontSize={20} mr={2}>
              {icon}
            </Box>
            <Text fontWeight={600} _hover={{ textColor: "#37B063" }}>
              {text}
            </Text>
          </Flex>
        </MenuItem>
      )}
    </>
  );
};

export default CustomMenuItem;
