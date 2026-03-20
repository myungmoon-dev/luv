import YouTube from "react-youtube";
import { Spinner, cn } from "..";
import getYoutubeId from "../utils/getYoutubeId";

interface IYoutubeVideoProps {
  videoId?: string;
  className?: string;
  isPlaylist?: boolean;
  isFullLink?: boolean;
  autoplay?: boolean;
  mute?: boolean;
  loop?: boolean;
}

export const YoutubeVideo = ({
  videoId,
  className,
  isPlaylist,
  isFullLink = false,
  autoplay = false,
  mute = false,
  loop = false,
}: IYoutubeVideoProps) => {
  const formattedVideoId = isFullLink ? getYoutubeId({ url: videoId }) : videoId;

  const playerVars: Record<string, string | number | boolean> = {
    modestbranding: 1, // 유튜브 로고 최소화
    rel: 0, // 관련 영상 추천 끄기
    controls: 0, // 컨트롤러 노출 (0은 완전 제거)
    fs: 0, // 전체화면 버튼 비활성화
    showinfo: 0, // 영상 정보 표시 비활성화
    iv_load_policy: 3, // 주석/인포카드 비활성화
    cc_load_policy: 0, // 자막 로드 비활성화
    autohide: 1, // 호버/동작 후 제어 UI 자동 숨김(가능한 범위 내)
    playsinline: 1,
  };

  if (autoplay) playerVars.autoplay = 1;
  if (mute) playerVars.mute = 1;
  if (loop && formattedVideoId) {
    playerVars.loop = 1;
    // loop + autoplay를 위해 playlist에 같은 영상 id를 넣어줍니다.
    playerVars.playlist = formattedVideoId;
  }

  if (isPlaylist && formattedVideoId) {
    playerVars.listType = "playlist";
    playerVars.list = formattedVideoId;
  }

  const opts = {
    playerVars: {
      ...(playerVars as Record<string, unknown>),
    },
  };

  return (
    <div className={cn("ui-relative", className)}>
      {formattedVideoId ? (
        <YouTube
          opts={isPlaylist || autoplay || mute || loop ? opts : {}}
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
