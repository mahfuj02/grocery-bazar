import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import CategoryList from "./categories/CategoryList";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobileView] = useMediaQuery("(max-width: 992px)"); // Adjust the breakpoint as per your needs
  const handleToggle = () => {
    if (isMobileView) {
      onOpen();
    }
  };

  if (isMobileView) {
    return (
      <Box>
        <Button
          w="full"
          justifyContent="flex-start"
          variant="link"
          display="flex"
          alignItems="center"
          onClick={handleToggle}
        >
          <Icon as={HamburgerIcon} boxSize={6} />
        </Button>
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton mt={2}/>
            <DrawerHeader>Categories</DrawerHeader>
            <DrawerBody>
              <CategoryList />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    );
  }

  return (
    <Box>
      <Box>
        <CategoryList />
      </Box>
    </Box>
  );
};

export default Sidebar;
