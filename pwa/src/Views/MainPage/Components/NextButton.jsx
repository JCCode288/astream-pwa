import { Box, Text } from "@chakra-ui/react";

export default function NextButton({ func }) {
  return (
    <Box
      onClick={func}
      width="100%"
      height="13rem"
      display="flex"
      alignItems="center"
      justifyContent="center"
      as="button"
      fontWeight="650"
      _active={{
        bg: "white",
        color: "black",
      }}
      _hover={{
        bg: "white",
        color: "black",
      }}
      transitionDuration="150ms"
      transitionTimingFunction="linear"
    >
      <Text fontSize="xl" textShadow="0px 0px 2px black">
        Next Page
      </Text>
    </Box>
  );
}
