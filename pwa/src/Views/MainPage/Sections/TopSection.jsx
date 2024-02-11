import { Box, GridItem, HStack } from "@chakra-ui/react";
import { area } from "../../../utils/area.constant";
import TopCard from "../Components/TopCard";
import { useSelector } from "react-redux";

export default function TopSection() {
  const top = useSelector(({ animes }) => animes.topAnimes);
  return (
    <GridItem area={area.top} overflowX="auto">
      <HStack zIndex="-1" display="flex">
        {top.map((anime) => (
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
      </HStack>
    </GridItem>
  );
}
