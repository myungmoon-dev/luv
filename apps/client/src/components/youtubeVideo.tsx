import React, { useEffect, useState } from "react";
import { Spinner } from "ui";

type YoutubeVideoProps = {
  videoId: string | undefined;
};

const YoutubeVideo = ({ videoId }: YoutubeVideoProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-transparent">
          <Spinner loading={isLoading} />
        </div>
      ) : (
        <iframe
          className="h-full w-full rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}`}
          allowFullScreen
          loading="lazy"
          onLoad={() => setIsLoading(false)}
        />
      )}
    </>
  );
};

export default YoutubeVideo;
