import React, { useState } from "react";
import ArtPlayer from "./ArtPlayer";
import Hls from "hls.js";
import { AspectRatio, Box } from "@chakra-ui/react";

export default function StreamPlayer({ currentSource, subs, currentQuality }) {
  const [uri] = useState(currentSource?.url ?? null);

  let options = {
    container: ".artplayer-app",
    url: uri,
    customType: {
      m3u8: function (video, url, art) {
        if (Hls.isSupported()) {
          if (art.hls) art.hls.destroy();
          const hls = new Hls();
          hls.loadSource(url);
          hls.attachMedia(video);
          art.hls = hls;
          art.on("destroy", () => hls.destroy());
        } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
          video.src = url;
        } else {
          art.notice.show = "Unsupported playback format";
        }
      },
    },
    title: "",
    poster: "",
    volume: 1,
    isLive: false,
    muted: false,
    autoplay: false,
    autoOrientation: true,
    pip: true,
    autoSize: false,
    autoMini: false,
    screenshot: true,
    setting: true,
    loop: false,
    flip: true,
    playbackRate: true,
    aspectRatio: true,
    fullscreen: true,
    fullscreenWeb: false,
    subtitleOffset: false,
    miniProgressBar: true,
    mutex: true,
    backdrop: true,
    playsInline: true,
    autoPlayback: true,
    airplay: true,
    theme: "#F5316F",
    whitelist: ["*"],
    moreVideoAttr: {
      crossOrigin: "anonymous",
    },
    quality: currentSource
      ? [
          {
            default: currentQuality === "default",
            html: currentQuality === "default" ? "720p" : currentQuality,
            url: currentSource.url,
          },
        ]
      : [],
    thumbnails: {
      url: "",
      number: 60,
      column: 10,
    },
    subtitle: {
      url: subs.length ? subs.find((sub) => sub.lang === "English")?.url : "",
      type: "vtt",
      style: {
        color: "#fff",
      },
      encoding: "utf-8",
    },
  };

  return (
    <Box w="85%" mx="auto">
      <AspectRatio ratio={16 / 9}>
        <ArtPlayer option={options} />
      </AspectRatio>
    </Box>
  );
}
