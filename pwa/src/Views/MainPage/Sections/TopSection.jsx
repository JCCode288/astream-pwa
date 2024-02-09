import { Box, GridItem, HStack } from "@chakra-ui/react";
import { area } from "../../../utils/area.constant";
import TopCard from "../Components/TopCard";

export default function TopSection({ top }) {
  return (
    <GridItem area={area.top} overflowX="auto">
      <HStack zIndex="-1" display="flex">
        {top.map((anime) => (
          <Box
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
