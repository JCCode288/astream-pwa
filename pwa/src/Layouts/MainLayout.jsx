import { VStack } from "@chakra-ui/layout";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <VStack>
      <Outlet />
    </VStack>
  );
}
