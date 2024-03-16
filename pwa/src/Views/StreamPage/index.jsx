import { Box, Heading } from "@chakra-ui/react";
import { useCallback, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanStreamState,
  fetchAnimeStream,
} from "../../stores/streams/stream.action";
import SplashScreen from "../Splash";
import StreamPlayer from "./Components/StreamPlayer";
import idToName from "../../utils/id-to-name";

export default function StreamPage() {
  const { episodeId } = useParams("episodeId");
  const dispatcher = useDispatch();
  const name = idToName(episodeId);

  const { loading, sources, currentQuality, qualityMap, subtitles } =
    useSelector(({ stream }) => stream);

  const currentSource = useMemo(() => {
    const idx = qualityMap[currentQuality];

    const src = sources[idx];
    if (src) return src;

    let backupSrc = sources.find((el) => el.quality === "720p");
    if (backupSrc) return backupSrc;

    return sources && sources.length ? sources[0] : null;
  }, [currentQuality, qualityMap, sources]);

  const fetchStream = useCallback(async () => {
    try {
      await dispatcher(fetchAnimeStream(episodeId));
    } catch (err) {
      console.log(err.response.data);
    }
  }, [dispatcher, episodeId]);

  useEffect(() => {
    fetchStream();

    return () => {
      dispatcher(cleanStreamState());
    };
  }, [fetchStream, dispatcher]);

  if (loading || !currentSource) return <SplashScreen />;

  return (
    <Box gap="1rem" flexDir="column" display="flex">
      <Heading
        mx="1rem"
        px="2rem"
        py="1rem"
        border="2px"
        mt="0.2rem"
        borderColor="green.500"
        rounded="4px"
        maxW="fit-content"
        fontWeight="semibold"
      >
        {name}
      </Heading>
      <StreamPlayer
        subs={subtitles}
        currentSource={currentSource}
        currentQuality={currentQuality}
      />
    </Box>
  );
}
