"use client";

import YouTube from "react-youtube";
import { cn } from "@/lib/utils";
import { getYoutubeIdFromUrl } from "@/lib/youtube-id";

type YoutubeVideoProps = {
  videoId?: string;
  className?: string;
  isPlaylist?: boolean;
  isFullLink?: boolean;
  autoplay?: boolean;
  mute?: boolean;
  loop?: boolean;
};

export function YoutubeVideo({
  videoId,
  className,
  isPlaylist,
  isFullLink = false,
  autoplay = false,
  mute = false,
  loop = false,
}: YoutubeVideoProps) {
  const formattedVideoId = isFullLink ? getYoutubeIdFromUrl(videoId) : videoId;

  const playerVars: Record<string, string | number | boolean> = {
    modestbranding: 1,
    rel: 0,
    controls: 0,
    fs: 0,
    showinfo: 0,
    iv_load_policy: 3,
    cc_load_policy: 0,
    autohide: 1,
    playsinline: 1,
  };

  if (autoplay) playerVars.autoplay = 1;
  if (mute) playerVars.mute = 1;
  if (loop && formattedVideoId) {
    playerVars.loop = 1;
    playerVars.playlist = formattedVideoId;
  }

  if (isPlaylist && formattedVideoId) {
    playerVars.listType = "playlist";
    playerVars.list = formattedVideoId;
  }

  const opts =
    isPlaylist || autoplay || mute || loop
      ? { playerVars: playerVars as Record<string, unknown> }
      : {};

  return (
    <div className={cn("relative", className)}>
      {formattedVideoId ? (
        <YouTube
          opts={opts}
          videoId={isPlaylist ? "" : formattedVideoId}
          iframeClassName="h-full w-full"
          className="h-full w-full"
          loading="lazy"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-muted" />
      )}
    </div>
  );
}
