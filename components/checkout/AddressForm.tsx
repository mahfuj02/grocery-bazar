import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";

export interface FormData {
  id?: number;
  name: string;
  phone: string;
  address: string;
  floor: string;
  apartment: string;
  // date: string;
}

interface Props {
  allAddress: FormData[];
  counter: number;
  setAllAddress: React.Dispatch<React.SetStateAction<FormData[]>>;
  handleShowAddressForm: () => void;
  handleCounter: () => void;
}

const AddressForm = ({
  counter,
  allAddress,
  setAllAddress,
  handleShowAddressForm,
  handleCounter,
}: Props) => {
  //   const [counter, setCounter] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    // id: 0,
    name: "",
    phone: "",
    address: "",
    floor: "",
    apartment: "",
    // date: "",
  });

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newAddress = {
      id: counter,
      phone: formData.phone,
      name: formData.name,
      floor: formData.floor,
      apartment: formData.apartment,
      address: formData.address,
    };
    setAllAddress([...allAddress, newAddress]);
    handleCounter();
    setFormData({
      //   id: 0,
      name: "",
      phone: "",
      address: "",
      floor: "",
      apartment: "",
      // date: "",
    });
    handleShowAddressForm();
  };

  return (
    <Box p={4} width={{ base: "1fr", lg: "80%" }}>
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>
            Name{" "}
            <Text as="span" color="red">
              *
            </Text>{" "}
          </FormLabel>
          <Input
            placeholder="Enter Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>
            Phone Number{" "}
            <Text as="span" color="red">
              *
            </Text>{" "}
          </FormLabel>
          <Input
            type="tel"
            placeholder="Enter your phone number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            pattern="[0-9,+,-]*"
            required
          />
        </FormControl>
        <Box display="flex" gap={2}>
          <FormControl mb={4}>
            <FormLabel>Floor</FormLabel>
            <Input
              placeholder="Enter floor number"
              name="floor"
              value={formData.floor}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Apartment Number</FormLabel>
            <Input
              placeholder="Enter apartment number"
              name="apartment"
              value={formData.apartment}
              onChange={handleChange}
            />
          </FormControl>
        </Box>
        <FormControl mb={4}>
          <FormLabel>
            Address{" "}
            <Text as="span" color="red">
              *
            </Text>{" "}
          </FormLabel>
          <Textarea
            placeholder="Enter your address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </FormControl>

        {/* <FormControl mb={4}>
            <FormLabel>Preferred Delivery Date</FormLabel>
            <Input
              placeholder="Select Date and Time"
              size="md"
              type="datetime-local"
              value={formData.date}
              onChange={handleChange}
            />
          </FormControl> */}
        <Button colorScheme="teal" type="submit">
          Add Address
        </Button>
        <Button
          onClick={handleShowAddressForm}
          size={"md"}
          color="white"
          ml="70%"
          bg="#E04F54"
          _hover={{ bg: "#E04F54" }}
        >
          Back
        </Button>
      </form>
    </Box>
  );
};

export default AddressForm;
