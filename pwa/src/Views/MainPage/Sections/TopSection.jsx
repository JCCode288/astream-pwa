import { Box, Flex, GridItem, Text } from "@chakra-ui/react";
import { area } from "../../../utils/area.constant";
import { useDispatch, useSelector } from "react-redux";
import { fetchNextPage } from "../../../stores/animes/animes.action";
import AnimeStack from "../Components/AnimeStack";
import SectionTitle from "../Components/SectionTitle";

export default function TopSection() {
  const dispatcher = useDispatch();

  const handleTopNextPage = async () => {
    try {
      await dispatcher(fetchNextPage("top"));
    } catch (err) {
      console.log(err);
    }
  };

  const top = useSelector(({ animes }) => animes.topAnimes);

  return (
    <GridItem area={area.top} overflowX="none" maxW="100%" flexDir="row">
      <SectionTitle title="Top Animes" />
      <AnimeStack func={handleTopNextPage} animes={top} />
    </GridItem>
  );
}
