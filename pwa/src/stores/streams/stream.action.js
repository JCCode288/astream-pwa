import axios from "axios";
import { LOADING, QUALITY, STREAM, STREAM_URL } from "./action.type";

function fetchStreamSuccess(payload) {
  return {
    type: STREAM,
    payload,
  };
}
function loadingChange(payload) {
  return {
    type: LOADING,
    payload,
  };
}

export function changeQuality(payload) {
  return {
    type: QUALITY,
    payload,
  };
}

export function fetchAnimeStream(episodeId, count = 0) {
  return async (dispatcher) => {
    try {
      dispatcher(loadingChange(true));

      console.log(STREAM_URL + `/${episodeId}`);

      const { data: animeStream } = await axios.get(
        STREAM_URL + `/${episodeId}`
      );

      const { headers, sources, download, subtitles } = animeStream;

      const qualityMap = sources.reduce((curr, next, idx) => {
        curr[next.quality] = idx;

        return curr;
      }, {});

      dispatcher(
        fetchStreamSuccess({
          headers,
          sources,
          download,
          qualityMap,
          subtitles,
        })
      );
      dispatcher(loadingChange(false));
    } catch (err) {
      console.log(err);
      dispatcher(loadingChange(false));
      if (count < 2) {
        return await dispatcher(fetchAnimeStream(episodeId, count + 1));
      }

      throw err;
    }
  };
}
