import { Box, Grid, GridItem } from "@chakra-ui/react";
import RecentCard from "../Components/RecentCard";
import { area } from "../../../utils/area.constant";
import NextButton from "../Components/NextButton";

export default function RecentSection({ recent }) {
  return (
    <GridItem area={area.recent} overflowY="auto">
      <Grid
        grid
        gridTemplateColumns={{
          base: "1fr",
          md: "repeat(auto-fit, minmax(14rem, max-content))",
        }}
      >
        {recent.map((anime) => (
          <Box
            minWidth="100%"
            height="13rem"
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
