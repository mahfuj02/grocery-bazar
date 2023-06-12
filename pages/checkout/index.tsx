import AddressForm from "@/components/checkout/AddressForm";
import { Badge, Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { BiMap, BiPlus, BiMoney } from "react-icons/bi";

import { FormData } from "../../components/checkout/AddressForm";
import DeleteAddress from "@/components/checkout/DeleteAddress";
import useCartStore from "@/hooks/useCartStore";
const CheckoutPage: React.FC = () => {
  const [allAddress, setAllAddress] = useState<FormData[]>([]);
  const [showAddressForm, setShowAddressForm] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(1);

  const totalTk = useCartStore((s) => s.totalMoney);

  const isButtonDisable = false;
  const handleCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleShowAddressForm = () => {
    setShowAddressForm(!showAddressForm);
  };

  return (
    <>
      {!showAddressForm && (
        <Box m={{ base: 1, lg: 4 }}>
          <Box display="flex">
            <BiMap size={"24px"} />
            <Heading fontSize="16px" ml={"10px"}>
              Select a Delivery Address
            </Heading>
          </Box>
          <Box
            display="flex"
            padding={2}
            borderRadius={5}
            border={"1px solid #B7B7B7"}
            width={{ base: "100", lg: "80%" }}
            alignItems={"center"}
            justifyContent="center"
            my={2}
            cursor="pointer"
            onClick={() => setShowAddressForm(true)}
          >
            <BiPlus color="#1d3a4b" size="24px" />{" "}
            <Text color="#1d3a4b" size="24px" ml={5}>
              {" "}
              New Address{" "}
            </Text>
          </Box>

          {allAddress.map((data, index) => (
            <Box
              key={index}
              display="flex"
              padding={2}
              borderRadius={5}
              border={"1px solid #B7B7B7"}
              width={{ base: "100", lg: "80%" }}
              my={2}
              cursor="pointer"
            >
              <Text
                color="#1d3a4b"
                fontSize="14px"
                fontWeight={500}
                ml={5}
                width="60%"
              >
                {`${data.floor ? data.floor + "," : ""} ${
                  data.apartment ? data.apartment + "," : ""
                } ${data.address}`}
              </Text>
              <Box display={{ lg: "flex" }} justifyContent="center">
                <Box
                  mr={{ lg: "90%" }}
                  color="secondary"
                  fontWeight="bold"
                  fontSize={"14px"}
                  _hover={{
                    borderBottom: "1px solid",
                    borderColor: "secondary",
                  }}
                >
                  update
                </Box>
                <DeleteAddress
                  data={data}
                  allAddress={allAddress}
                  setAllAddress={setAllAddress}
                />
              </Box>
            </Box>
          ))}

          <Box
            borderRadius={5}
            border={"1px solid #B7B7B7"}
            width={{ base: "100", lg: "80%" }}
            my={2}
            p={5}
          >
            <Box display="flex" ml={"10px"} mb={5}>
              <BiMoney size="24px" />
              <Heading fontSize="16px" px={3}>
                Payment Option
              </Heading>
            </Box>

            <VStack>
              <Box>
                <Button
                  size="lg"
                  width={{ base: "100px", md:'150px', lg: "200px" }}
                  bg="secondary"
                  textColor="white"
                  _hover={{ bg: "secondary" }}
                  mr={10}
                >
                  Proceed{" "}
                </Button>
                <Button
                  size="lg"
                  width={{ base: "100px", md:'150px', lg: "200px" }}
                  colorScheme="#F7F7F7"
                  border="1px solid #FF3131"
                  textColor="black"
                  cursor='default'
                >
                  Bkash
                  <Box position="absolute" top="-12px" right="6px">
                    <Badge
                      textColor="white"
                      fontSize="10px"
                      p="5px"
                      bg="#D01E6A"
                    >
                      coming soon
                    </Badge>
                  </Box>
                </Button>
              </Box>
            </VStack>
          </Box>

          <VStack mt={10}>
            <Box>
              <Button
                isDisabled={allAddress.length === 0 ? true : false}
                borderRightRadius="none"
                bg="secondary"
                textColor="white"
                _hover={{ bg: "secondary" }}
              >
                Proceed{" "}
              </Button>
              <Button
                isDisabled={allAddress.length === 0 ? true : false}
                borderLeftRadius="none"
                bg="#E04F54"
                textColor="white"
                _hover={{ bg: "#E04F54" }}
              >
                {totalTk}
              </Button>
            </Box>
          </VStack>
        </Box>
      )}
      {showAddressForm && (
        <AddressForm
          counter={counter}
          allAddress={allAddress}
          setAllAddress={setAllAddress}
          handleShowAddressForm={handleShowAddressForm}
          handleCounter={handleCounter}
        />
      )}
    </>
  );
};

export default CheckoutPage;
