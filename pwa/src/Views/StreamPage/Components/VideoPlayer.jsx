import { Box } from "@chakra-ui/react";
import Artplayer from "artplayer";
import React, { useRef, useEffect, useCallback } from "react";

function VideoPlayer({ option, getInstance, ...rest }) {
  const artRef = useRef();

  const createPlayer = useCallback(
    (option) => {
      const art = new Artplayer({
        ...option,
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

      return art;
    },
    [getInstance]
  );

  useEffect(() => {
    let art = createPlayer(option);

    artRef.current.scrollIntoView({ behavior: "smooth" });

    return () => {
      if (art && art.destroy) {
        art.destroy(false);
      }
    };
  }, [createPlayer, option]);

  return (
    <Box
      ref={artRef}
      {...rest}
      rounded="sm"
      zIndex={1}
      className="artplayer-app"
    />
  );
}

export default VideoPlayer;
