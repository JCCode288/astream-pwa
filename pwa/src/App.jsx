import React from "react";
import { Box } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import AppWrapper from "./AppWrapper";

function App() {
  return (
    <Box className="App" minH="100vh">
      <RouterProvider router={router} />
    </Box>
  );
}

export default AppWrapper(App);
