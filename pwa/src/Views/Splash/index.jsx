import { Box } from "@chakra-ui/react";
import LoadingSpinner from "../../Components/LoadingSpinner";
import MainLogo from "../../Components/MainLogo";

export default function SplashScreen() {
  return (
    <Box
      display="flex"
      w="100%"
      h="100vh"
      alignItems="center"
      justifyContent="center"
      bg="gray.800"
      flexDir="column"
    >
      <Box pos="absolute" display="flex">
        <MainLogo size="192px" />
      </Box>
      <Box pos="absolute" display="flex">
        <LoadingSpinner size="xl" /> {/* Placeholder for splash logo */}
      </Box>
    </Box>
  );
}
