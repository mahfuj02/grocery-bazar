import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/react";
import { GoogleIcon } from "@/providers/ProviderIcons";
import Logo from "./Logo";

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
        <ModalHeader textColor="secondary" fontWeight={600}>
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
