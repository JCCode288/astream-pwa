import { LOADING, POPULAR, RECENT, TOP } from "./action.type";

const init = {
  recentAnimes: [],
  topAnimes: [],
  popularAnimes: [],
  loading: true,
};

export default function animesReducer(state = init, { type, payload }) {
  switch (type) {
    case RECENT:
      return {
        ...state,
        recentAnimes: payload,
      };
    case TOP:
      return {
        ...state,
        topAnimes: payload,
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
