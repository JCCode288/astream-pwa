import { Box, Container } from "@chakra-ui/react";
import { useCallback, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnimeStream } from "../../stores/streams/stream.action";
import SplashScreen from "../Splash";
import StreamPlayer from "./Components/StreamPlayer";
import idToName from "../../utils/id-to-name";

export default function StreamPage() {
  const { episodeId } = useParams("episodeId");
  const dispatcher = useDispatch();
  const name = idToName(episodeId);

  const {
    loading,
    headers,
    sources,
    currentQuality,
    download,
    qualityMap,
    subtitles,
  } = useSelector(({ stream }) => stream);

  const currentSource = useMemo(() => {
    const idx = qualityMap[currentQuality];
    const src = sources[idx];
    return src ? src : sources[0];
  }, [currentQuality, qualityMap, sources]);

  const allQuality = useMemo(() => {
    return Object.keys(qualityMap);
  }, [qualityMap]);

  const fetchStreamData = useCallback(async () => {
    try {
      await dispatcher(fetchAnimeStream(episodeId));
    } catch (err) {
      console.log(err.response.data);
    }
  }, [episodeId, dispatcher]);

  useEffect(() => {
    fetchStreamData();
  }, [fetchStreamData]);

  if (loading) return <SplashScreen />;

  return (
    // <StreamPlayer
    //   subs={subtitles}
    //   currentSource={currentSource}
    //   currentQuality={currentQuality}
    // />
    <>
      {JSON.stringify({
        loading,
        headers,
        sources,
        currentQuality,
        download,
        qualityMap,
        subtitles,
        currentSource,
        allQuality,
        name,
      })}
    </>
  );
}
