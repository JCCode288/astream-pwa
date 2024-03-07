import { LOADING, QUALITY, STREAM } from "./action.type";

const init = {
  headers: {},
  sources: [],
  qualityMap: {},
  currentQuality: "default",
  download: "",
  loading: true,
  subtitles: [],
};

export default function streamReducer(state = init, { type, payload }) {
  console.log({ type, payload }, "<<<<< REDUCER");
  switch (type) {
    case STREAM:
      const { headers, sources, download, qualityMap } = payload;
      return {
        ...state,
        headers,
        sources,
        download,
        qualityMap,
      };

    case QUALITY:
      return {
        ...state,
        currentQuality: payload,
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
