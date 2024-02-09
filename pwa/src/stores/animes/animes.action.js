import { ANIME_URL, LOADING, POPULAR, RECENT, TOP } from "./action.type";
import axios from "axios";

export function fetchRecentSuccess(payload) {
  return {
    type: RECENT,
    payload,
  };
}

export function fetchTopSuccess(payload) {
  return {
    type: TOP,
    payload,
  };
}

export function fetchPopularSuccess(payload) {
  return {
    type: POPULAR,
    payload,
  };
}

function loadingChange(payload) {
  return {
    type: LOADING,
    payload,
  };
}

export function fetchMain() {
  return async (dispatcher) => {
    try {
      dispatcher(loadingChange(true));

      const {
        data: { recentAnimes, topAnimes },
      } = await axios.get(ANIME_URL + "/main");

      if (recentAnimes && recentAnimes.length) {
        dispatcher(fetchRecentSuccess(recentAnimes));
      }
      if (topAnimes && topAnimes.length) {
        dispatcher(fetchTopSuccess(topAnimes));
      }

      dispatcher(loadingChange(false));
    } catch (err) {
      dispatcher(loadingChange(false));
      throw err;
    }
  };
}
