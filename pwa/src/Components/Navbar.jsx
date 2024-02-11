import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MainLogo from "./MainLogo";

export default function Navbar() {
  return (
    <Box
      as="nav"
      justifyContent="start"
      display="flex"
      alignSelf="start"
      px="1rem"
      pos="sticky"
      top="0px"
      bg="gray.800"
      w="100%"
      borderBottom="1px"
      borderColor="green.200"
      zIndex={4}
      py="0.3rem"
    >
      <Box
        border="1px"
        padding="0.1rem"
        rounded="2px"
        borderColor="green.300"
        shadow="3px 3px 3px green"
        _hover={{
          borderColor: "green.500",
          shadow: "3px 3px 3px lime",
        }}
        _
        transitionDuration="150ms"
      >
        <Link to="/">
          <MainLogo size="48" />
        </Link>
      </Box>
    </Box>
  );
}
