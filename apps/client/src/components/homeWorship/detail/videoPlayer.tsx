import { useState } from "react";
import { Spinner, cn } from "ui";

interface IHomeWorshipVideoPlayerProps {
  video: string;
}

const HomeWorshipVideoPlayer = ({ video }: IHomeWorshipVideoPlayerProps) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative aspect-[16/9] w-full">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <Spinner />
        </div>
      )}
      <iframe
        className={cn(
          "absolute top-0 h-full w-full rounded-md border-none transition-opacity duration-500",
          loading ? "opacity-0" : "opacity-100",
        )}
        src={video}
        onLoad={() => setLoading(false)}
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowFullScreen
      />
    </div>
  );
};

export default HomeWorshipVideoPlayer;
