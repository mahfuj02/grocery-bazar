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

interface Props {
  weight: string[];
}

const WeightSelector = ({ weight }: Props) => {
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
        {weight.map((w, index) => (
          <MenuItem
            key={index}
            fontWeight="700"
            textColor="#77798C"
            onClick={() => setSelectedOption(w)}
            color={selectedOption === w ? "secondary" : "#77798C"}
            _hover={{ color: "secondary" }}
          >
            {w}
            {selectedOption === w && <BiCheck color="secondary" />}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default WeightSelector;
