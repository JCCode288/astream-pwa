import { Grid } from "@chakra-ui/react";

export default function EpisodeGrid({ children }) {
  return (
    <Grid gridTemplateRows="repeat(7, 1fr)" gridAutoFlow="column" gap="0.3rem">
      {children}
    </Grid>
  );
}
