import { VStack } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

export default function MainLayout() {
  return (
    <VStack bg="gray.800" color="white" display="flex">
      <Navbar />
      <Box w="100%">
        <Outlet />
      </Box>
    </VStack>
  );
}
