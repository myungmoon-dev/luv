import { useGetYoutubeLink } from "@/query/youtube";
import Link from "next/link";
import { YoutubeType } from "type";
import { YoutubeVideo } from "ui";

interface ILiveVideoProps {
  option: YoutubeType;
}

const LiveVideo = ({ option }: ILiveVideoProps) => {
  const { data: youtubeLink } = useGetYoutubeLink(option);

  return (
    <div className="flex flex-col gap-2">
      <YoutubeVideo className="h-[300px] w-[500px]" videoId={youtubeLink} />
      <div className="flex">
        <p>현재 주소 -&nbsp;</p>
        <Link
          target="_blank"
          href={`https://youtube.com/watch?v=${youtubeLink}`}
          className="text-blue-500"
        >
          {youtubeLink}
        </Link>
      </div>
    </div>
  );
};

export default LiveVideo;
