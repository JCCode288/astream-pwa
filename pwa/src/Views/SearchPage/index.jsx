import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchSearchAnimes } from "../../stores/animes/animes.action";
import SplashScreen from "../Splash";
import { Box } from "@chakra-ui/react";
import SearchStack from "./components/SearchStack";

export default function SearchPage() {
  const { search } = useLocation();

  const [query, setQuery] = useState(() => {
    return new URLSearchParams(search).get("query");
  });
  const stackRef = useRef(null);

  const dispatcher = useDispatch();
  const { searchedAnimes, loading, searchNext } = useSelector(
    ({ animes }) => animes
  );

  const fetchSearch = useCallback(async () => {
    try {
      await dispatcher(fetchSearchAnimes(query));
    } catch (err) {
      console.log(err);
    }
  }, [query, dispatcher]);

  useEffect(() => {
    setQuery(() => new URLSearchParams(search).get("query"));
    fetchSearch().then(() =>
      stackRef.current.scrollIntoView({ behavior: "smooth" })
    );
  }, [search, fetchSearch]);

  if (loading) return <SplashScreen />;

  return (
    <Box my="1rem" overflowX="auto" ref={stackRef}>
      <SearchStack animes={searchedAnimes} isNext={searchNext} />
    </Box>
  );
}
