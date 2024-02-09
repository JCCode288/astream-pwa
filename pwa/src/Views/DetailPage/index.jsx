import { Box, Button, Container, HStack, Text } from "@chakra-ui/react";
import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  episodesNextPage,
  episodesPrevPage,
  fetchAnimeDetail,
} from "../../stores/details/detail.action";

export default function DetailPage() {
  const { id } = useParams("id");
  const { animeDetail, loading, episodes, currentIdx } = useSelector(
    ({ detail }) => detail
  );

  const dispatcher = useDispatch();
  const fetchDetail = useCallback(async () => {
    await dispatcher(fetchAnimeDetail(id));
  }, [id, dispatcher]);

  const isNextPage = useMemo(() => {
    const thisPage = episodes[currentIdx]?.length;
    if (thisPage < 13) return false;

    return true;
  }, [currentIdx, episodes]);

  const isPrevPage = useMemo(() => {
    if (currentIdx < 1) return false;

    return true;
  }, [currentIdx]);

  const handleNextPage = () => {
    dispatcher(episodesNextPage());
  };
  const handlePrevPage = () => {
    dispatcher(episodesPrevPage());
  };

  useEffect(() => {
    fetchDetail();
  }, [fetchDetail]);

  if (loading) return <>Loading</>;

  console.log({ isNextPage, isPrevPage });

  return (
    <Box>
      <Container>{JSON.stringify(animeDetail)}</Container>;
      <Container>{JSON.stringify(episodes[currentIdx])}</Container>
      <HStack>
        {isPrevPage && <Button onClick={handlePrevPage}>PrevPage</Button>}
        {isNextPage && <Button onClick={handleNextPage}>NextPage</Button>}
        <Text>{currentIdx}</Text>
      </HStack>
    </Box>
  );
}
