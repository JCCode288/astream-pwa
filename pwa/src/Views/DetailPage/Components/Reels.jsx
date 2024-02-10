import { Box } from "@chakra-ui/react";
import ImgSvg from "../../../Assets/Vector.svg";

export default function Reels() {
  return (
    <Box
      sx={{
        bgImage: ImgSvg,
        h: "1.2rem",
        bgPos: "center",
        bgSize: "contain",
        w: "100%",
      }}
    ></Box>
  );
}
