import {
  Button
} from "@chakra-ui/react";

const Profile = () => {
  return (
    <>
      <Button
        bg="#37B063"
        textColor="#fff"
        _hover={{ bg: "#37B063", opacity: "90%" }}
      >
        Join
      </Button>
    </>
  );
};

export default Profile;
