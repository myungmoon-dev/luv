"use client";

import { Play } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { getYoutubeIdFromUrl } from "@/lib/youtube-id";

import { YoutubeVideo } from "./youtube-video";

function getYoutubeThumbnailUrl(videoId: string): string {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

type YoutubeThumbnailPlayerProps = {
  videoId: string;
  title?: string;
  className?: string;
  /** 큰 카드 / 작은 카드 재생 버튼 크기 */
  size?: "default" | "compact";
};

export function YoutubeThumbnailPlayer({
  videoId,
  title,
  className,
  size = "default",
}: YoutubeThumbnailPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const id = getYoutubeIdFromUrl(videoId) ?? videoId;

  if (isPlaying && id) {
    return (
      <YoutubeVideo videoId={id} className={className} autoplay controls />
    );
  }

  const playButtonClass =
    size === "compact"
      ? "size-10 [&_svg]:size-4"
      : "size-14 sm:size-16 [&_svg]:size-6 sm:[&_svg]:size-7";

  return (
    <button
      type="button"
      onClick={() => setIsPlaying(true)}
      className={cn(
        "group relative block w-full overflow-hidden bg-[#1e2a4a] text-left",
        className,
      )}
      aria-label={title ? `${title} 재생` : "영상 재생"}
    >
      {id ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={getYoutubeThumbnailUrl(id)}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      ) : (
        <span className="absolute inset-0 bg-[#1e2a4a]" aria-hidden />
      )}
      <span
        className="absolute inset-0 bg-[#0A1E51]/25 transition-colors group-hover:bg-[#0A1E51]/40"
        aria-hidden
      />
      <span className="absolute inset-0 flex items-center justify-center" aria-hidden>
        <span
          className={cn(
            "flex items-center justify-center rounded-full bg-white/95 pl-0.5 text-[#1e2a4a] shadow-md transition-transform group-hover:scale-105 group-active:scale-95",
            playButtonClass,
          )}
        >
          <Play className="fill-current" />
        </span>
      </span>
    </button>
  );
}
