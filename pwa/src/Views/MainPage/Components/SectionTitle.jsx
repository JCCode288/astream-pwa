import { Box, Flex, Text } from "@chakra-ui/react";

export default function SectionTitle({ title }) {
  return (
    <Box mt="0.3rem" mb="0.5rem">
      <Flex border="1px" w="fit-content" px="0.4rem" py="0.1rem">
        <Text fontSize="x-large" fontFamily="sans-serif" fontWeight={500}>
          {title}
        </Text>
      </Flex>
    </Box>
  );
}
