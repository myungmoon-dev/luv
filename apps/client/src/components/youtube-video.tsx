import React from "react";

type YoutubeVideoProps = {
  videoId: string;
};

const YoutubeVideo = ({ videoId }: YoutubeVideoProps) => {
  return (
    <iframe className="h-full w-full rounded-lg" src={`https://www.youtube.com/embed/${videoId}`} allowFullScreen />
  );
};

export default YoutubeVideo;
