import { Box, GridItem } from "@chakra-ui/react";
import { area } from "../../../utils/area.constant";
import SectionTitle from "../Components/SectionTitle";

export default function PopularSection() {
  return (
    <GridItem
      area={area.popular}
      borderRight="1px"
      p="1rem"
      borderColor="green.200"
    >
      <SectionTitle title="Popular Animes" />
      <Box textAlign="center">
        This section is under construction. It will be used to track the popular
        anime in this website
      </Box>
    </GridItem>
  );
}
