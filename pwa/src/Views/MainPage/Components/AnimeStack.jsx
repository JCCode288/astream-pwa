import { Box, HStack } from "@chakra-ui/react";
import TopCard from "./TopCard";
import NextButton from "./NextButton";

export default function AnimeStack({ animes, func, isNext = true }) {
  return (
    <HStack zIndex="-1" display="flex">
      {animes.map((anime) => (
        <Box
          key={anime.id}
          width={{ base: "12rem", md: "100%" }}
          height="15rem"
          display="flex"
          justifyContent="center"
        >
          <TopCard anime={anime} />
        </Box>
      ))}

      <Box
        width={{ base: "12rem", md: "100%" }}
        height="15rem"
        display="flex"
        justifyContent="center"
      >
        {isNext && <NextButton func={func} />}
      </Box>
    </HStack>
  );
}
