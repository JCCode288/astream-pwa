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
    >
      <Text fontSize="xl" textShadow="0px 0px 7px white">
        Next Page
      </Text>
    </Box>
  );
}
