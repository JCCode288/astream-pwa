import { Box, GridItem } from "@chakra-ui/react";
import { area } from "../../../utils/area.constant";

export default function PopularSection() {
  return (
    <GridItem bg="red.500" area={area.popular}>
      <Box textAlign="center">
        This section is under construction. It will be used to track the popular
        anime in this website
      </Box>
    </GridItem>
  );
}
