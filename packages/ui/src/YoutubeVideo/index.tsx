import YouTube from "react-youtube";
import { Spinner, cn } from "..";
import getYoutubeId from "../utils/getYoutubeId";

interface IYoutubeVideoProps {
  videoId?: string;
  className?: string;
  isPlaylist?: boolean;
  isFullLink?: boolean;
}

export const YoutubeVideo = ({
  videoId,
  className,
  isPlaylist,
  isFullLink = false,
}: IYoutubeVideoProps) => {
  const formattedVideoId = isFullLink ? getYoutubeId({ url: videoId }) : videoId;

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
          iframeClassName="ui-h-full ui-w-full"
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
