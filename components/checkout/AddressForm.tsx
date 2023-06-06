import { Box, Button, FormControl, FormLabel, Input, Text, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";

export interface FormData {
  name: string;
  phone: string;
  address: string;
  floor: string;
  apartment: string;
  // date: string;
}

interface Props{
    allAddress: FormData[]
    setAllAddress:React.Dispatch<React.SetStateAction<FormData[]>>
}

const AddressForm = ({allAddress, setAllAddress}: Props) => {
  const [formData, setFormData] = useState<FormData>({
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
    setAllAddress([...allAddress, formData]);
    setFormData({
      name: "",
      phone: "",
      address: "",
      floor: "",
      apartment: "",
      // date: "",
    });
  };

  return (
    <Box p={4} width={{ base: "1fr", lg: "80%" }}>
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Name <Text as='span' color='red'>*</Text> </FormLabel>
          <Input
            placeholder="Enter Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Phone Number <Text as='span' color='red'>*</Text> </FormLabel>
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
          <FormLabel>Address <Text as='span' color='red'>*</Text> </FormLabel>
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
          Place Order
        </Button>
      </form>
    </Box>
  );
};

export default AddressForm;
