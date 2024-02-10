import { Box, Container } from "@chakra-ui/react";
import { useCallback, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnimeStream } from "../../stores/streams/stream.action";
import SplashScreen from "../Splash";

export default function StreamPage() {
  const { episodeId } = useParams("episodeId");
  const dispatcher = useDispatch();

  const { loading, headers, sources, currentQuality, download, qualityMap } =
    useSelector(({ stream }) => stream);

  const currentSource = useMemo(() => {
    const idx = qualityMap[currentQuality];

    return sources[idx];
  }, [currentQuality, qualityMap, sources]);

  const allQuality = useMemo(() => {
    return Object.keys(qualityMap);
  }, [qualityMap]);

  const fetchStreamData = useCallback(async () => {
    await dispatcher(fetchAnimeStream(episodeId));
  }, [episodeId, dispatcher]);

  useEffect(() => {
    fetchStreamData();
  }, [fetchStreamData]);

  if (loading) return <SplashScreen />;

  return <Box display="flex" maxW="100%"></Box>;
}
