import { Button, useDisclosure } from "@chakra-ui/react";
import LoginModal from "../LoginModal";
import { useState } from "react";
const Profile = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [login, setLogin] = useState(false);
  console.log("login status", login);

  if (!login) {
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
        <LoginModal
          isOpen={isOpen}
          onClose={onClose}
          setLogin={setLogin}
          login={login}
        />
      </>
    );
  }
  else
    return
};

export default Profile;
