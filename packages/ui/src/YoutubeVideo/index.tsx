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
      modestbranding: 1, // 유튜브 로고 최소화
      rel: 0, // 관련 영상 추천 끄기
      controls: 0, // 컨트롤러 노출 (0은 완전 제거)
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
