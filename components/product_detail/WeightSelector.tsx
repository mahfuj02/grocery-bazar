import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Grid,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { BiCheck } from "react-icons/bi";

const WeightSelector = () => {
  const [selectedOption, setSelectedOption] = useState("1 kg");

  return (
    <Menu>
      <MenuButton
        as={Button}
        size="sm"
        width="40%"
        border="1px"
        borderColor="secondary"
        textColor="secondary"
        fontWeight="700"
        bg="background"
        _expanded={{ bg: "background" }}
        _hover={{ bg: "background" }}
      >
        {selectedOption}
        <ChevronDownIcon ml="10px" color="secondary" />
      </MenuButton>
      <MenuList>
        <MenuItem
          fontWeight="700"
          textColor="#77798C"
          onClick={() => setSelectedOption("500 mg")}
          color={selectedOption === "500 mg" ? "secondary" : "#77798C"}
          _hover={{ color: "secondary" }}
        >
          500 mg
          {selectedOption === "500 mg" && <BiCheck color="secondary" />}
        </MenuItem>
        <MenuItem
          fontWeight="700"
          onClick={() => setSelectedOption("100 mg")}
          color={selectedOption === "100 mg" ? "green" : "#77798C"}
          _hover={{ color: "secondary" }}
        >
          100 mg
          {selectedOption === "100 mg" && <BiCheck color="secondary" />}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default WeightSelector;
