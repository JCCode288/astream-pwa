import { combineReducers } from "redux";
import { IP, LOADING, THEME } from "./action.type";
import animeReducer from "./animes/animes.reducer";
import detailReducer from "./details/details.reducer";
import streamReducer from "./streams/stream.reducer";

const init = {
  theme: "dark",
  loading: true,
  ip: "",
};

function appReducer(state = init, { type, payload }) {
  switch (type) {
    case THEME:
      return {
        ...state,
        theme: payload,
      };

    case IP:
      return {
        ...state,
        ip: payload,
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

export default combineReducers({
  animes: animeReducer,
  detail: detailReducer,
  app: appReducer,
  stream: streamReducer,
});
