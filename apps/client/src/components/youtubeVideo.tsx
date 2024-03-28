import { YoutubeType } from "@/api/youtube";
import { useGetYoutubeLink } from "@/query/youtube";
import React from "react";

type YoutubeVideoProps = {
  type: YoutubeType;
};

const YoutubeVideo = ({ type }: YoutubeVideoProps) => {
  const { data } = useGetYoutubeLink(type);

  return (
    <iframe
      className="h-full w-full rounded-lg"
      src={`https://www.youtube.com/embed/${data}`}
      allowFullScreen
      loading="lazy"
    />
  );
};

export default YoutubeVideo;
