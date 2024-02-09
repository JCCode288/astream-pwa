import { Box, Text } from "@chakra-ui/react";

export default function SplashScreen() {
  return (
    <Box
      display="flex"
      w="100%"
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Text display="flex" h="fit-content" w="fit-content">
        SPLASH SCREEN LOGO
      </Text>
    </Box>
  );
}
