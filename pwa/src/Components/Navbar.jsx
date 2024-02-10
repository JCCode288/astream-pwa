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
      <Link to="/">
        <MainLogo size="48" />
      </Link>
    </Box>
  );
}
