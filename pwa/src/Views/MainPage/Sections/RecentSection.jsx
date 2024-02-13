import { Box, Grid, GridItem } from "@chakra-ui/react";
import RecentCard from "../Components/RecentCard";
import { area } from "../../../utils/area.constant";
import NextButton from "../../../Components/NextButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchNextPage } from "../../../stores/animes/animes.action";

export default function RecentSection() {
  const dispatcher = useDispatch();
  const recent = useSelector(({ animes }) => animes.recentAnimes);

  const handleNextRecent = async () => {
    try {
      await dispatcher(fetchNextPage());
    } catch (err) {
      console.log(err);
    }
  };

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
        <NextButton func={handleNextRecent} />
      </Grid>
    </GridItem>
  );
}
