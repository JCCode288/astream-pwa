import { Grid } from "@chakra-ui/react";
import { area } from "../../utils/area.constant";
import { useSelector } from "react-redux";
import { lazy } from "react";
import { Suspense } from "react";
import LoadingSpinner from "../../Components/LoadingSpinner";

export default function MainPage() {
  const TopSection = lazy(() => import("./Sections/TopSection"));
  const RecentSection = lazy(() => import("./Sections/RecentSection"));
  const PopularSection = lazy(() => import("./Sections/PopularSection"));
  const SearchSection = lazy(() => import("./Sections/SearchSection"));

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
      <Suspense fallback={<LoadingSpinner />}>
        <TopSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <PopularSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <RecentSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <SearchSection />
      </Suspense>
    </Grid>
  );
}
