import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Reels from "./Reels";

export default function DetailHero({ detail }) {
  const animeDetail = detail;

  return (
    <Box>
      <Reels />
      <Box
        sx={{
          backgroundImage: `linear-gradient(to right, rgba(32, 33, 35, 0.81), rgba(32, 33, 35, 0.15), rgba(32, 33, 35, 0.13), rgba(255, 255, 255, 0.01), rgba(32, 33, 35, 0.13), rgba(32, 33, 35, 0.15), rgba(32, 33, 35, 0.81)), url(${animeDetail?.image})`,
          bgPos: "center",
        }}
        justifyContent="center"
        alignItems="center"
        display="flex"
        minH="70vh"
        w="100%"
      >
        <Flex
          p={{ base: "1rem", md: "3%" }}
          w="100%"
          flexDir={{ base: "column", md: "row" }}
          gap="0.5rem"
        >
          <Heading
            color="whitesmoke"
            textShadow="0px 0px 5px black"
            fontSize="3xl"
            fontWeight="bold"
          >
            {animeDetail?.title}
          </Heading>
          <Text
            fontWeight="semibold"
            color="whitesmoke"
            textShadow="0px 0px 5px black"
            whiteSpace="pre-wrap"
          >
            {animeDetail?.description}
          </Text>
        </Flex>
      </Box>
      <Reels />
    </Box>
  );
}
