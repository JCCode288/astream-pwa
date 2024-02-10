import { Box, Grid, GridItem } from "@chakra-ui/react";
import RecentCard from "../Components/RecentCard";
import { area } from "../../../utils/area.constant";
import NextButton from "../Components/NextButton";
import { useSelector } from "react-redux";

export default function RecentSection() {
  const recent = useSelector(({ animes }) => animes.recentAnimes);
  return (
    <GridItem area={area.recent} overflowY="auto">
      <Grid
        gridTemplateColumns={{
          base: "1fr",
          md: "repeat(auto-fit, minmax(13rem, max-content))",
          lg: "repeat(auto-fit, minmax(14rem, max-content))",
        }}
      >
        {recent.map((anime) => (
          <Box
            key={anime.id}
            minWidth="100%"
            height={{ base: "13rem", lg: "14rem" }}
            display="flex"
            justifyContent="center"
          >
            <RecentCard anime={anime} />
          </Box>
        ))}
        <NextButton />
      </Grid>
    </GridItem>
  );
}
