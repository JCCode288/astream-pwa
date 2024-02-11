import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import { DetailPage, GenrePage, MainPage, StreamPage } from "../Views";

const routes = [
  {
    name: "home",
    index: true,
    path: "",
    element: <MainPage />,
  },
  {
    name: "detail",
    path: "animes/:id",
    element: <DetailPage />,
    children: [
      {
        name: "DetailStream",
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
