import {
  Box,
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

import { Google } from "@mui/icons-material";

import Logo from "./Logo";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent alignItems="center" >
        <ModalHeader textColor="#37B063" fontWeight={600}>
          Welcome to Grocery Bazar
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody paddingBottom={5}>
          <Box marginY={20}>
            <Logo />
          </Box>
          <Button
            // leftIcon={<Google />}
            variant="outline"
            border="2px solid #37B063"
            bg="background"
            _hover={{ bg: "background", opacity: "90%" }}
          >
            <Box paddingLeft={2} paddingRight={3}>
              <Google />
            </Box>
            Sign in with Google
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;
