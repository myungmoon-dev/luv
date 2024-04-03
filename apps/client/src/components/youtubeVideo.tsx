import { useGetYoutubeLink } from "@/query/youtube";
import { IYoutubeProps } from "@/types/youtube/props";
import React from "react";
import { Spinner } from "ui";

const YoutubeVideo = ({ type, count }: IYoutubeProps) => {
  const { data, isLoading } = useGetYoutubeLink({ type, count });
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
