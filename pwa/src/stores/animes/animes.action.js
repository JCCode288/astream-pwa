import { BASE_URL } from "../action.type";
import {
  ANIME_URL,
  IS_SEARCH_NEXT,
  LOADING,
  NEXT_RECENT,
  NEXT_RECENT_SUCCESS,
  NEXT_SEARCH,
  NEXT_SEARCH_SUCCESS,
  NEXT_TOP,
  NEXT_TOP_SUCCESS,
  POPULAR,
  RECENT,
  SEARCH,
  TOP,
} from "./action.type";
import axios from "axios";

function fetchRecentSuccess(payload) {
  return {
    type: RECENT,
    payload,
  };
}

function fetchTopSuccess(payload) {
  return {
    type: TOP,
    payload,
  };
}

function fetchPopularSuccess(payload) {
  return {
    type: POPULAR,
    payload,
  };
}

function incrementRecent() {
  return {
    type: NEXT_RECENT,
  };
}

function fetchRecentNextSuccess(payload) {
  return {
    type: NEXT_RECENT_SUCCESS,
    payload,
  };
}

function incrementTop() {
  return {
    type: NEXT_TOP,
  };
}

function fetchTopNextSuccess(payload) {
  return {
    type: NEXT_TOP_SUCCESS,
    payload,
  };
}

function fetchSearchSuccess(payload) {
  return {
    type: SEARCH,
    payload,
  };
}

function incrementSearch() {
  return {
    type: NEXT_SEARCH,
  };
}

function fetchNextSearchSuccess(payload) {
  return {
    type: NEXT_SEARCH_SUCCESS,
    payload,
  };
}

function isSearchNextPage(payload) {
  return {
    type: IS_SEARCH_NEXT,
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

      const animesUnavailable =
        !recentAnimes ||
        !topAnimes ||
        !recentAnimes?.length ||
        !topAnimes?.length;

      if (animesUnavailable) {
        throw new Error("Failed to get animes");
      }

      dispatcher(fetchRecentSuccess(recentAnimes));
      dispatcher(fetchTopSuccess(topAnimes));

      dispatcher(loadingChange(false));
    } catch (err) {}
  };
}

export function fetchNextPage(type = "recent") {
  return async (dispatcher, getState) => {
    try {
      dispatcher(loadingChange(true));

      switch (type) {
        case "recent":
          dispatcher(incrementRecent());
          break;
        case "top":
          dispatcher(incrementTop());
          break;
        default:
          return;
      }

      let { topPage, recentPage } = getState().animes;

      let url = ANIME_URL + `/main?recentPage=${recentPage}&topPage=${topPage}`;

      const {
        data: { recentAnimes, topAnimes },
      } = await axios.get(url);

      const validateRecent = () =>
        type === "recent" && recentAnimes && recentAnimes.length;

      const validateTop = () => type === "top" && topAnimes && topAnimes.length;

      if (validateRecent()) {
        dispatcher(fetchRecentNextSuccess(recentAnimes));
      }

      if (validateTop()) {
        dispatcher(fetchTopNextSuccess(topAnimes));
      }

      dispatcher(loadingChange(false));
    } catch (err) {
      dispatcher(loadingChange(false));
      throw err;
    }
  };
}

export function fetchSearchAnimes(q) {
  return async (dispatcher) => {
    try {
      dispatcher(loadingChange(true));

      const { data: searched } = await axios.get(BASE_URL + "/search?q=" + q);

      const { hasNextPage, results: searchedAnimes } = searched;

      dispatcher(fetchSearchSuccess(searchedAnimes));
      dispatcher(isSearchNextPage(hasNextPage));

      dispatcher(loadingChange(false));
    } catch (err) {
      dispatcher(loadingChange(false));
    }
  };
}
