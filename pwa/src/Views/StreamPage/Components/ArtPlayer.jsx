import { Box } from "@chakra-ui/react";
import Artplayer from "artplayer";
import React, { useRef, useEffect } from "react";

function ArtPlayer({ option, getInstance, ...rest }) {
  const artRef = useRef();

  useEffect(() => {
    const art = new Artplayer({
      ...option,
      container: artRef.current,
    });

    art.on("resize", () => {
      art.subtitle.style({
        fontSize: art.height * 0.05 + "px",
      });
    });

    art.on("subtitleUpdate", (text) => {
      art.template.$subtitle.innerHTML = text;
    });

    if (getInstance && typeof getInstance === "function") {
      getInstance(art);
    }

    artRef.current.scrollIntoView({ behavior: "smooth" });

    return () => {
      art.destroy();
    };
  }, [getInstance, option]);

  return <Box ref={artRef} {...rest} rounded="sm" zIndex={1} />;
}

export default ArtPlayer;
