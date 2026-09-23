import { Box, Button, Heading, Link, Text, VStack } from "@chakra-ui/react";

const MaintenancePage = () => {
  return (
    <Box minH="100vh" bg="#08110d" color="white" display="grid" placeItems="center" px={6}>
      <VStack maxW="680px" spacing={6} textAlign="center">
        <Text color="#55c878" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase">
          Grocery Bazar
        </Text>
        <Heading fontSize={{ base: "3xl", md: "5xl" }}>
          Backend deployment in progress
        </Heading>
        <Text color="gray.300" fontSize={{ base: "md", md: "lg" }} lineHeight="1.8">
          Full source, including the frontend and Django backend, is available on GitHub.
          The local build is fully functional end-to-end.
        </Text>
        <Button
          as={Link}
          href="https://github.com/mahfuj02/grocery-bazar"
          isExternal
          bg="#37B063"
          color="white"
          _hover={{ bg: "#2d9654", textDecoration: "none" }}
        >
          View source on GitHub
        </Button>
      </VStack>
    </Box>
  );
};

export default MaintenancePage;
