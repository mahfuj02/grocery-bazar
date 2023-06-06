import { Box } from "@chakra-ui/react";
import React from "react";
import { FormData } from "./AddressForm";
interface Props {
  data: FormData;
  allAddress: FormData[];
  setAllAddress: React.Dispatch<React.SetStateAction<FormData[]>>;
}

const DeleteAddress = ({ data, allAddress, setAllAddress }: Props) => {
  const handleDeleteAddress = (addressId?: number) => {
    const updatedAddresses = allAddress.filter(
      (address) => address.id !== addressId
    );
    setAllAddress(updatedAddresses);
  };
  return (
    <Box
      color="red"
      fontWeight="bold"
      fontSize={"14px"}
      _hover={{ borderBottom: "1px solid red" }}
      onClick={() => handleDeleteAddress(data.id)}
    >
      delete
    </Box>
  );
};

export default DeleteAddress;
