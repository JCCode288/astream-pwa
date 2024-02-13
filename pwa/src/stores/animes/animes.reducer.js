import {
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

const init = {
  recentPage: 1,
  recentAnimes: [],
  topPage: 1,
  topAnimes: [],
  popularAnimes: [],
  searchedAnimes: [],
  searchPage: 1,
  searchNext: false,
  loading: true,
};

export default function animesReducer(state = init, { type, payload }) {
  switch (type) {
    case RECENT:
      return {
        ...state,
        recentAnimes: payload,
      };

    case NEXT_RECENT:
      const nextRecentPage = state.recentPage + 1;

      return {
        ...state,
        recentPage: nextRecentPage,
      };

    case NEXT_RECENT_SUCCESS:
      return {
        ...state,
        recentAnimes: [...state.recentAnimes, ...payload],
      };

    case TOP:
      return {
        ...state,
        topAnimes: payload,
      };

    case NEXT_TOP:
      const nextTopPage = state.topPage + 1;

      return {
        ...state,
        topPage: nextTopPage,
      };

    case NEXT_TOP_SUCCESS:
      return {
        ...state,
        topAnimes: [...state.topAnimes, ...payload],
      };

    case SEARCH:
      return {
        ...state,
        searchedAnimes: payload,
      };

    case NEXT_SEARCH:
      const nextSearchPage = state.searchPage + 1;

      return {
        ...state,
        searchPage: nextSearchPage,
      };

    case NEXT_SEARCH_SUCCESS:
      return {
        ...state,
        searchedAnimes: [...state.searchedAnimes, ...payload],
      };

    case IS_SEARCH_NEXT:
      return {
        ...state,
        searchNext: payload,
      };

    case POPULAR:
      return {
        ...state,
        popularAnimes: payload,
      };
    case LOADING:
      return {
        ...state,
        loading: payload,
      };

    default:
      return state;
  }
}
