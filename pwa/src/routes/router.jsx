import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import { DetailPage, GenrePage, MainPage, StreamPage } from "../Views";
import SearchPage from "../Views/SearchPage";

const routes = [
  {
    name: "home",
    path: "",
    element: <MainPage />,
    children: [
      {
        name: "search",
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
  {
    name: "detail",
    path: "animes/:id",
    element: <DetailPage />,
    children: [
      {
        name: "detail_stream",
        path: "stream/:episodeId",
        element: <StreamPage />,
      },
    ],
  },
  {
    name: "genre",
    path: "genres/:genre",
    element: <GenrePage />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace={true} />,
  },
];

const root = [
  {
    path: "/",
    element: <MainLayout />,
    children: routes,
  },
];

export default createBrowserRouter(root);
