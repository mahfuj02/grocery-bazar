import { Box, Text, Image, Button, SimpleGrid } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const ProductCard = () => {
  const data = {
    title: "ACI Aerosol 125ml + 1 Food Container Free",
    weight: "1kg",
    price: 120,
    image:
      "https://shatkora.sgp1.cdn.digitaloceanspaces.com/media/products/beef_liver1.jpg",
  };

  return (
    <SimpleGrid columns={{ base: 2, lg: 3 }} spacing={4}>
      <Box padding={2} maxW="sm" borderRadius="md" overflow="hidden">
        <Image src={data.image} alt={data.title} objectFit="cover" h={200} />
        <Box p={4}>
        <Text
          fontWeight="bold"
          textAlign="center"
          mb={2}
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {data.title}
        </Text>
          <Box display="flex" justifyContent="space-between">
            <Text>{data.weight}</Text>
            <Text fontWeight="bold">₹{data.price}</Text>
          </Box>
        </Box>
        <Box px={4} pb={4}>
          <Button
            colorScheme="green"
            variant="outline"
            leftIcon={<AddIcon />}
            width="100%"
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
      <Box padding={2} maxW="sm" borderRadius="md" overflow="hidden">
        <Image src={data.image} alt={data.title} objectFit="cover" h={200} />
        <Box p={4}>
        <Text
          fontWeight="bold"
          textAlign="center"
          mb={2}
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {data.title}
        </Text>
          <Box display="flex" justifyContent="space-between">
            <Text>{data.weight}</Text>
            <Text fontWeight="bold">₹{data.price}</Text>
          </Box>
        </Box>
        <Box px={4} pb={4}>
          <Button
            colorScheme="green"
            variant="outline"
            leftIcon={<AddIcon />}
            width="100%"
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
      <Box padding={2} maxW="sm" borderRadius="md" overflow="hidden">
        <Image src={data.image} alt={data.title} objectFit="cover" h={200} />
        <Box p={4}>
        <Text
          fontWeight="bold"
          textAlign="center"
          mb={2}
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {data.title}
        </Text>
          <Box display="flex" justifyContent="space-between">
            <Text>{data.weight}</Text>
            <Text fontWeight="bold">₹{data.price}</Text>
          </Box>
        </Box>
        <Box px={4} pb={4}>
          <Button
            colorScheme="green"
            variant="outline"
            leftIcon={<AddIcon />}
            width="100%"
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
      <Box padding={2} maxW="sm" borderRadius="md" overflow="hidden">
        <Image src={data.image} alt={data.title} objectFit="cover" h={200} />
        <Box p={4}>
        <Text
          fontWeight="bold"
          textAlign="center"
          mb={2}
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {data.title}
        </Text>
          <Box display="flex" justifyContent="space-between">
            <Text>{data.weight}</Text>
            <Text fontWeight="bold">₹{data.price}</Text>
          </Box>
        </Box>
        <Box px={4} pb={4}>
          <Button
            colorScheme="green"
            variant="outline"
            leftIcon={<AddIcon />}
            width="100%"
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
      
    </SimpleGrid>
  );
};

export default ProductCard;
