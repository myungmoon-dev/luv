import dayjs from "dayjs";
import { IYoutube } from "type";
import { YoutubeVideo } from "ui";

interface IRowListVideoSecitonProps {
  video: IYoutube;
  title: String;
}

const RowListVideoSeciton = ({ video, title }: IRowListVideoSecitonProps) => {
  return (
    <div>
      <YoutubeVideo videoId={video.url} className="aspect-video w-[160px] sm:w-[200px] md:w-[220px] lg:w-[280px]" />
      <div className="pt-2 sm:px-3 sm:pt-3 md:px-0 md:pt-3 lg:pt-4">
        <p className="mb-1 text-xs font-medium text-[#001F54] sm:mb-1.5 sm:text-sm md:text-base lg:mb-2 lg:text-base">
          {title}
        </p>
        <p className="mb-1 text-sm font-medium text-[#222222] sm:text-base md:text-lg lg:mb-2 lg:text-xl">
          {video.title}
        </p>
        <p className="text-xs text-[#666666] sm:text-sm md:text-sm lg:text-base">
          주후 {dayjs(video.createdAt).format("YYYY.MM.DD")}
        </p>
      </div>
    </div>
  );
};

export default RowListVideoSeciton;
