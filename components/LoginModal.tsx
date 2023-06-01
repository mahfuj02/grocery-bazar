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
import { Dispatch, SetStateAction, useEffect } from "react";
import { GoogleIcon } from "@/providers/ProviderIcons";

interface Props {
  isOpen: boolean;
  handleGoogleLogin: () => void;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose, handleGoogleLogin }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent alignItems="center">
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
            onClick={handleGoogleLogin}
          >
            <Box paddingLeft={2} paddingRight={3}>
              <GoogleIcon />
            </Box>
            Sign in with Google
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;
