import { Box, Text } from "@chakra-ui/react";
import LoadingSpinner from "../../Components/LoadingSpinner";

export default function SplashScreen() {
  return (
    <Box
      display="flex"
      w="100%"
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <LoadingSpinner /> {/* Placeholder for splash logo */}
    </Box>
  );
}
