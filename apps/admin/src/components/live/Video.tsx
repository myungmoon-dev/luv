import { useGetLive } from "@/query/youtube";
import Link from "next/link";
import { Spinner, YoutubeVideo } from "ui";

const LiveVideo = () => {
  const { data } = useGetLive();

  if (!data) return <Spinner />;

  return (
    <div className="flex flex-col gap-2">
      <YoutubeVideo className="h-[300px] w-[500px]" videoId={data.url} />
      <div className="flex">
        <p>현재 주소 -&nbsp;</p>
        <Link
          target="_blank"
          href={`https://youtube.com/watch?v=${data.url}`}
          className="text-blue-500"
        >
          {data.url}
        </Link>
      </div>
    </div>
  );
};

export default LiveVideo;
