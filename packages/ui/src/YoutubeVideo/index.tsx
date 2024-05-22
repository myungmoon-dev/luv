import YouTube from "react-youtube";
import { Spinner, cn } from "..";
import getYoutubeId from "../utils/getYoutubeId";

interface IYoutubeVideoProps {
  videoId: string;
  className?: string;
  isPlaylist?: boolean;
}

export const YoutubeVideo = ({ videoId, className, isPlaylist }: IYoutubeVideoProps) => {
  const formattedVideoId = getYoutubeId({ url: videoId });

  const opts = {
    playerVars: {
      listType: "playlist",
      list: formattedVideoId,
    },
  };

  return (
    <div className={cn("ui-relative", className)}>
      {formattedVideoId ? (
        <YouTube
          opts={isPlaylist ? opts : {}}
          videoId={isPlaylist ? "" : formattedVideoId}
          iframeClassName="ui-h-full ui-w-full ui-rounded-lg"
          className="ui-w-full ui-h-full"
          loading="lazy"
        />
      ) : (
        <div className="ui-absolute ui-inset-0 ui-flex ui-items-center ui-justify-center">
          <Spinner />
        </div>
      )}
    </div>
  );
};
