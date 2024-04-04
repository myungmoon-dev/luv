import { useGetYoutubeList } from "@/query/youtube";
import { IGetYoutubeListProps } from "type";
import { Spinner } from "ui";

interface IYoutubeVideoProps extends IGetYoutubeListProps {
  videoId?: string;
}

const YoutubeVideo = ({ videoId, videoType, videoCount }: IYoutubeVideoProps) => {
  if (videoId) {
    return (
      <iframe
        className="h-full w-full rounded-lg"
        src={`https://www.youtube.com/embed/${videoId}`}
        allowFullScreen
        loading="lazy"
      />
    );
  }

  const { data, isLoading } = useGetYoutubeList({ videoType, videoCount });

  return (
    <>
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-transparent">
          <Spinner />
        </div>
      ) : (
        data && (
          <iframe
            className="h-full w-full rounded-lg"
            src={`https://www.youtube.com/embed/${data[0].videoId}`}
            allowFullScreen
            loading="lazy"
          />
        )
      )}
    </>
  );
};

export default YoutubeVideo;
