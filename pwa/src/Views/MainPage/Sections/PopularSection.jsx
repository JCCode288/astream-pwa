import { GridItem } from "@chakra-ui/react";
import { area } from "../../../utils/area.constant";

export default function PopularSection() {
  return (
    <GridItem bg="red.500" area={area.popular}>
      POPULAR
    </GridItem>
  );
}
