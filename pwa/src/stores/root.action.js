import axios from "axios";
import { IP, IP_URL, LOADING } from "./action.type";
import { fetchMain } from "./animes/animes.action";

export function fetchIPSuccess(payload) {
  return {
    type: IP,
    payload,
  };
}

function loadingChange(payload) {
  return {
    type: LOADING,
    payload,
  };
}

export function init() {
  return async (dispatcher) => {
    try {
      dispatcher(loadingChange(true));

      await dispatcher(fetchMain());

      const {
        data: { ip },
      } = await axios.get(IP_URL);

      dispatcher(fetchIPSuccess(ip));
      dispatcher(loadingChange(false));
    } catch (err) {
      dispatcher(loadingChange(false));
      throw err;
    }
  };
}
