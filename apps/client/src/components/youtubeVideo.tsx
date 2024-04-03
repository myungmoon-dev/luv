import { useGetYoutubeLink } from "@/query/youtube";
import React from "react";
import { YoutubeType } from "type";
import { Spinner } from "ui";

type YoutubeVideoProps = {
  type: YoutubeType;
};

const YoutubeVideo = ({ type }: YoutubeVideoProps) => {
  const { data, isLoading } = useGetYoutubeLink(type);
  return (
    <>
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-transparent">
          <Spinner loading={isLoading} />
        </div>
      ) : (
        <iframe
          className="h-full w-full rounded-lg"
          src={`https://www.youtube.com/embed/${data}`}
          allowFullScreen
          loading="lazy"
        />
      )}
    </>
  );
};

export default YoutubeVideo;
