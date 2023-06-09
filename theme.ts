import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    secondary: "#37B063",
    mainPageBG: '#F7F7F7'
  },
});

export default theme;
