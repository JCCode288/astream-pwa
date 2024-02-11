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

  const { loading, episodes, currentIdx } = useSelector(({ detail }) => detail);

  const fetchDetail = useCallback(async () => {
    await dispatcher(fetchAnimeDetail(id));
  }, [id, dispatcher]);

  const currentPage = useMemo(() => {
    return episodes[currentIdx];
  }, [episodes, currentIdx]);

  const isNextPage = useMemo(() => {
    const thisPage = episodes[currentIdx]?.length;
    if (thisPage < 13) return false;

    return true;
  }, [currentIdx, episodes]);

  const isPrevPage = useMemo(() => {
    if (currentIdx < 1) return false;

    return true;
  }, [currentIdx]);

  useEffect(() => {
    fetchDetail();
  }, [fetchDetail]);

  if (loading) return <SplashScreen />;

  return (
    <Box
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      maxW="100vw"
      overflowX="hidden"
      maxH="100%"
    >
      <DetailHero />
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
              return <EpisodeBtn eps={eps} />;
            })}
          </EpisodeGrid>
        </Container>
        <PrevNextBtn isNextPage={isNextPage} isPrevPage={isPrevPage} />
      </Box>
      <Outlet />
    </Box>
  );
}
