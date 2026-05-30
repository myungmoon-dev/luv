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
  /** false면 컨트롤 숨김(기본). 썸네일 클릭 재생 시 true 권장 */
  controls?: boolean;
};

export function YoutubeVideo({
  videoId,
  className,
  isPlaylist,
  isFullLink = false,
  autoplay = false,
  mute = false,
  loop = false,
  controls = false,
}: YoutubeVideoProps) {
  const formattedVideoId = isFullLink ? getYoutubeIdFromUrl(videoId) : videoId;

  const playerVars: Record<string, string | number | boolean> = {
    modestbranding: 1,
    rel: 0,
    controls: controls ? 1 : 0,
    fs: controls ? 1 : 0,
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

  const opts = { playerVars: playerVars as Record<string, unknown> };

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
