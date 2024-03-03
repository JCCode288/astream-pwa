import {
  DETAIL,
  DETAIL_EPISODES,
  DETAIL_NEXT,
  DETAIL_PREV,
  LOADING,
} from "./action.type";

const init = {
  animeDetail: null,
  episodes: null,
  currentIdx: 0,
  loading: true,
};

export default function detailReducer(state = init, { type, payload }) {
  switch (type) {
    case DETAIL:
      return {
        ...state,
        animeDetail: payload,
      };
    case DETAIL_EPISODES:
      return {
        ...state,
        episodes: payload,
      };

    case DETAIL_NEXT:
      const nextCurrentPage = state.currentIdx + 1;
      const currEps = state.episodes[nextCurrentPage];

      if (!currEps || !currEps.length) {
        return state;
      }

      return {
        ...state,
        currentIdx: nextCurrentPage,
      };

    case DETAIL_PREV:
      const prevCurrentPage = state.currentIdx - 1;

      if (prevCurrentPage < 0) return state;

      return {
        ...state,
        currentIdx: prevCurrentPage,
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
