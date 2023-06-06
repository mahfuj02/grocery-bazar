import AddressForm from "@/components/checkout/AddressForm";
import {
  Box,
  Heading,
  Text
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiMap, BiPlus } from "react-icons/bi";

import { FormData } from "../../components/checkout/AddressForm";
const CheckoutPage: React.FC = () => {
  const [allAddress, setAllAddress] = useState<FormData[]>([]);

  return (
    <>
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
          width={"80%"}
          alignItems={"center"}
          justifyContent="center"
          my={2}
          cursor="pointer"
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
            width={"80%"}
            alignItems={"center"}
            justifyContent="center"
            my={2}
            cursor="pointer"
          >
            <Text
              color="#1d3a4b"
              fontSize="14px"
              fontWeight={500}
              ml={5}
              width="70%"
            >
              {`${data.floor ? data.floor + "," : ""} ${
                data.apartment ? data.apartment + "," : ""
              } ${data.address}`}
            </Text>
            <Box
              color="red"
              fontWeight="bold"
              fontSize={"14px"}
              _hover={{ borderBottom: "1px solid red" }}
            >
              delete
            </Box>
          </Box>
        ))}
      </Box>

      <AddressForm allAddress={allAddress} setAllAddress={setAllAddress} />
    </>
  );
};

export default CheckoutPage;
