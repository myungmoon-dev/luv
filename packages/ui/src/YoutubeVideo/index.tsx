import { Spinner, cn } from "..";

interface IYoutubeVideoProps {
  videoId?: string;
  className?: string;
}

export const YoutubeVideo = ({ videoId, className }: IYoutubeVideoProps) => {
  return (
    <div className={cn("ui-relative", className)}>
      {videoId ? (
        <iframe
          className="ui-h-full ui-w-full ui-rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}`}
          allowFullScreen
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
