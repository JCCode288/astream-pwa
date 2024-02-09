import { extendTheme } from "@chakra-ui/react";

const config = {
  inintialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
});

export default theme;
