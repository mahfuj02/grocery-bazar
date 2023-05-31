import {
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import LoginModal from '../LoginModal';
const Profile = () => {
  const { onOpen, isOpen, onClose} = useDisclosure()
  return (
    <>
      <Button
        bg="#37B063"
        textColor="#fff"
        _hover={{ bg: "#37B063", opacity: "90%" }}
        onClick={onOpen}
      >
        Join
      </Button>
      <LoginModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Profile;
