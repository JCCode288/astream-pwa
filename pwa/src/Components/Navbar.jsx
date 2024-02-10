import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MainLogo from "./MainLogo";

export default function Navbar() {
  return (
    <Box justifyContent="start" display="flex" alignSelf="start" px="1rem">
      <Link to="/">
        <MainLogo size="48" />
      </Link>
    </Box>
  );
}
