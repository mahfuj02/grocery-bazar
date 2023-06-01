import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuList,
  useDisclosure
} from "@chakra-ui/react";
import { useState } from "react";
import {
  BiCartAlt,
  BiCreditCard,
  BiFile,
  BiLogOut,
  BiUserCircle,
} from "react-icons/bi";
import avatar from "../../public/avatar.png";
import CustomMenuItem from "../CustomMenuItem";
import LoginModal from "../LoginModal";

const Profile = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("login status", isLoggedIn);
  const avatarUrl = avatar.src;

  const handleGoogleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
    onClose();
  };

  if (!isLoggedIn) {
    return (
      <>
        <Button
          bg="secondary"
          textColor="#fff"
          _hover={{ bg: "secondary", opacity: "90%" }}
          onClick={onOpen}
        >
          Join
        </Button>
        <LoginModal
          isOpen={isOpen}
          onClose={onClose}
          handleGoogleLogin={handleGoogleLogin}
        />
      </>
    );
  } else
    return (
      <>
        <Menu>
          <MenuButton as={Avatar} src={avatarUrl} cursor='pointer' />
          <MenuList>
            <MenuGroup title="Profile">
              <CustomMenuItem
                text="Profile"
                icon={<BiUserCircle />}
              ></CustomMenuItem>
              <CustomMenuItem
                text="Checkout"
                icon={<BiCreditCard />}
              ></CustomMenuItem>
              <CustomMenuItem
                text="My Order"
                icon={<BiCartAlt />}
              ></CustomMenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <CustomMenuItem text="Docs" icon={<BiFile />}></CustomMenuItem>
              <CustomMenuItem text="Help" icon={<BiFile />}></CustomMenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup>
              <CustomMenuItem
                text="Logout"
                icon={<BiLogOut />}
                handleGoogleLogin={handleGoogleLogin}
              ></CustomMenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </>
    );
};

export default Profile;
