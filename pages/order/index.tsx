import {
  Text,
  Box,
  Heading,
  VStack,
  Flex,
  Button,
  Divider,
  Image,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { AiFillHome } from "react-icons/ai";
import { useState } from "react";
import img from "@/public/Fruits__Vegetables_ImammHu_VbQibXe.webp";
const Order = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Box>
      <Heading fontSize="16px" px={3}>
        My Order
      </Heading>
      <Box
        borderRadius={5}
        border={"1px solid #B7B7B7"}
        width={{ base: "100", lg: "80%" }}
        my={2}
        p={5}
      >
        <Box ml={"10px"} mb={5}>
          <Box
            as="span"
            bg="secondary"
            padding="5px"
            fontSize="14px"
            borderRadius="4px"
            textColor="white"
            fontWeight="600"
          >
            {" "}
            Delivered
          </Box>
          <Box display="flex" marginTop={"10px"}>
            ID: <Text fontWeight="600"> {` 000341`}</Text>
          </Box>
          <Flex justify="space-between">
            <Text fontWeight="600">Total: 5,400</Text>
            <Button
              rightIcon={isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
              colorScheme="teal"
              variant="outline"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              details
            </Button>
          </Flex>
          {isExpanded && (
            <Box>
              <Divider my="10px" color="black" />
              <Box display="flex" alignItems={"center"}>
                <AiFillHome width="20%" fontSize="24px" />
                <Box width={"50%"} mx={3}>
                  {" "}
                  Avergreen-35, Jherjheripara, kumarpara, Sylhet
                </Box>
                <Box fontWeight="600"> 01779345678 </Box>
              </Box>

              <Box alignItems={"center"} mt="10px" bg="white" padding={"10px"}>
                <Box as="span" display="flex">
                  <Text fontWeight="600">Shipment Id 000341 </Text>
                </Box>
                <Box fontSize="12px"> June, 14, 2023 | 1:00PM - 2:00PM </Box>
              </Box>
              <Divider my="10px" color="black" />

              <Box>
                <>
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    mb={4}
                    bg={"white"}
                    padding="20px"
                    borderRadius="5px"
                  >
                    <Box width={"30%"}>
                      <Image
                        width="60px"
                        height="60px"
                        src={img.src}
                        alt="product"
                      />
                    </Box>

                    <Box width="50%">
                      <Text fontSize="12px" fontWeight="400">
                        Fresh Salt 1KG
                      </Text>
                      <Text
                        fontSize={"10px"}
                        fontWeight={600}
                        textColor={"gray.500"}
                      >
                        {" "}
                        tk300/75ml
                      </Text>
                    </Box>
                    {/* <Text fontSize='12px' fontWeight='400'>{item.name}</Text> */}
                    <Text textColor="secondary" fontWeight="600">
                      tk. 300
                    </Text>
                  </Flex>
                  <Divider />
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    mb={4}
                    bg={"white"}
                    padding="20px"
                    borderRadius="5px"
                  >
                    <Box width={"30%"}>
                      <Image
                        width="60px"
                        height="60px"
                        src={img.src}
                        alt="product"
                      />
                    </Box>

                    <Box width="50%">
                      <Text fontSize="12px" fontWeight="400">
                        Fresh Salt 1KG
                      </Text>
                      <Text
                        fontSize={"10px"}
                        fontWeight={600}
                        textColor={"gray.500"}
                      >
                        {" "}
                        tk300/75ml
                      </Text>
                    </Box>
                    {/* <Text fontSize='12px' fontWeight='400'>{item.name}</Text> */}
                    <Text textColor="secondary" fontWeight="600">
                      tk. 300
                    </Text>
                  </Flex>
                  <Divider />
                </>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Order;
