import { Grid } from "@chakra-ui/react";
import { area } from "../../utils/area.constant";
import { useSelector } from "react-redux";
import RecentSection from "./Sections/RecentSection";
import TopSection from "./Sections/TopSection";
import SearchSection from "./Sections/SearchSection";
import PopularSection from "./Sections/PopularSection";

export default function MainPage() {
  const { recent, top, ip } = useSelector(({ app, animes }) => {
    return {
      recent: animes.recentAnimes,
      top: animes.topAnimes,
      ip: app.ip,
      popular: [],
    };
  });

  return (
    <Grid
      px="0.5rem"
      minH="100vh"
      maxW="100vw"
      templateAreas={{
        base: `
        "${area.search}"
        "${area.top}"
        "${area.recent}"
        "${area.popular}"
      `,
        md: `
      "${area.top} ${area.top} ${area.top}"
      "${area.popular} ${area.recent} ${area.recent}"
      "${area.search} ${area.recent} ${area.recent}"
      `,
      }}
      gridTemplateRows={{ base: "auto", md: "max-content auto max(2.5rem)" }}
      overflow={"hidden"}
      templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
      gridGap="0.2rem"
    >
      <TopSection top={top} />
      <PopularSection />
      <RecentSection recent={recent} />
      <SearchSection />
    </Grid>
  );
}
