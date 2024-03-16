import { Box, Container } from "@chakra-ui/react";
import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { fetchAnimeDetail } from "../../stores/details/detail.action";
import EpisodeGrid from "./Components/EpisodeGrid";
import EpisodeBtn from "./Components/EpisodeBtn";
import PrevNextBtn from "./Components/PrevNextBtn";
import DetailHero from "./Components/DetailHero";
import SplashScreen from "../Splash";

export default function DetailPage() {
  const dispatcher = useDispatch();

  const { id } = useParams("id");

  const { loading, episodes, currentIdx, animeDetail } = useSelector(
    ({ detail }) => detail
  );
  const fetchDetail = useCallback(async () => {
    try {
      await dispatcher(fetchAnimeDetail(id));
    } catch (err) {
      console.log(err);
    }
  }, [dispatcher, id]);

  useEffect(() => {
    fetchDetail();
  }, []);

  const isLoading = loading || !animeDetail || !episodes;

  const currentPage = useMemo(() => {
    if (isLoading) {
      return [];
    }
    return episodes[currentIdx];
  }, [episodes, currentIdx, isLoading]);

  const isNextPage = useMemo(() => {
    if (isLoading) return false;

    const thisPage = episodes[currentIdx]?.length;
    if (thisPage < 13) return false;

    return true;
  }, [currentIdx, episodes, isLoading]);

  const isPrevPage = useMemo(() => {
    if (currentIdx < 1 || isLoading) return false;

    return true;
  }, [currentIdx, isLoading]);

  if (isLoading) return <SplashScreen />;

  return (
    <Box
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      maxW="100vw"
      overflowX="hidden"
      maxH="100%"
    >
      <DetailHero detail={animeDetail} />
      <Box>
        <Container
          display="flex"
          bg="gray.800"
          flexDirection="column"
          gap="1rem"
          py="1rem"
        >
          <EpisodeGrid>
            {currentPage.map((eps) => {
              return <EpisodeBtn eps={eps} key={eps.id} />;
            })}
          </EpisodeGrid>
        </Container>
        <PrevNextBtn isNextPage={isNextPage} isPrevPage={isPrevPage} />
      </Box>
      <Outlet />
    </Box>
  );
}
