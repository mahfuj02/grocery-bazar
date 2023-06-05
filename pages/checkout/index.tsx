import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea
} from "@chakra-ui/react";
import React, { useState } from "react";

interface FormData {
  name: string;
  phone: string;
  address: string;
  floor: string;
  apartment: string;
  date: string;
}

const CheckoutPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    address: "",
    floor: "",
    apartment: "",
    date: "",
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
    // Handle form submission
  };

  return (
    <Box p={4} width={{ base: "1fr", lg: "80%" }}>
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Phone Number</FormLabel>
          <Input
            type="tel"
            placeholder="Enter your phone number"
            value={formData.date}
            onChange={handleChange}
            pattern="[0-9]*"
            required
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Address</FormLabel>
          <Textarea
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </FormControl>

        <Box display="flex" gap={2}>
          <FormControl mb={4}>
            <FormLabel>Floor</FormLabel>
            <Input
              placeholder="Enter floor number"
              value={formData.floor}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Apartment Number</FormLabel>
            <Input
              placeholder="Enter apartment number"
              value={formData.apartment}
              onChange={handleChange}
              required
            />
          </FormControl>
        </Box>

        <FormControl mb={4} isRequired>
          <FormLabel>Preferred Delivery Date</FormLabel>
          <Input
            placeholder="Select Date and Time"
            size="md"
            type="datetime-local"
            value={formData.date}
            onChange={handleChange}
          />
        </FormControl>
        <Button colorScheme="teal" type="submit">
          Place Order
        </Button>
      </form>
    </Box>
  );
};

export default CheckoutPage;
