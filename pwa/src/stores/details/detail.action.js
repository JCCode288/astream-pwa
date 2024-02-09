import axios from "axios";
import {
  DETAIL,
  DETAIL_EPISODES,
  DETAIL_NEXT,
  DETAIL_PREV,
  DETAIL_URL,
  LOADING,
} from "./action.type";
import episodeSplitter from "../../utils/episode.splitter";

function fetchDetailSuccess(payload) {
  return {
    type: DETAIL,
    payload,
  };
}
function splitEpisodesSuccess(payload) {
  return {
    type: DETAIL_EPISODES,
    payload,
  };
}
function loadingChange(payload) {
  return {
    type: LOADING,
    payload,
  };
}

function incrementPage() {
  return { type: DETAIL_NEXT };
}

function decrementPage() {
  return { type: DETAIL_PREV };
}

export function episodesNextPage() {
  return (dispatcher) => {
    dispatcher(incrementPage());
  };
}
export function episodesPrevPage() {
  return (dispatcher) => {
    dispatcher(decrementPage());
  };
}
export function fetchAnimeDetail(id) {
  return async (dispatcher) => {
    try {
      dispatcher(loadingChange(true));

      const { data: animeDetail } = await axios.get(DETAIL_URL + `/${id}`);

      const { episodes: allEps } = animeDetail;

      const episodes = episodeSplitter(allEps);
      delete animeDetail.episodes;

      dispatcher(splitEpisodesSuccess(episodes));
      dispatcher(fetchDetailSuccess(animeDetail));
      dispatcher(loadingChange(false));
    } catch (err) {
      console.log(err);
      dispatcher(loadingChange(false));
      throw err;
    }
  };
}
