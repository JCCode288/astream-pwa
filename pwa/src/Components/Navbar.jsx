import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Box justifyContent="start" display="flex" alignSelf="start">
      <Link to="/">
        <Box whiteSpace="pre-line">Home Logo</Box>
      </Link>
    </Box>
  );
}
