import dayjs from "dayjs";
import { IYoutube } from "type";
import { YoutubeVideo } from "ui";

interface IMainVdieoSectionProps {
  video: IYoutube;
  title: string;
}
const MainVideoSection = ({ video, title }: IMainVdieoSectionProps) => {
  return (
    <div className="w-full bg-white">
      <YoutubeVideo
        videoId={video.url}
        className="aspect-video w-full sm:w-[400px] md:w-full md:h-[200px] lg:h-[320px]"
      />
      <div className="px-5 pb-3 pt-4 sm:px-6 sm:pb-4 sm:pt-5 md:px-6 md:pb-5 md:pt-5 lg:px-8 lg:pb-6 lg:pt-6">
        <p className="mb-1 text-xs font-medium text-[#001F54] sm:mb-2 sm:text-sm md:text-base lg:text-lg">
          {title}
        </p>
        <p className="mb-2 text-base font-medium text-[#222222] sm:mb-2 sm:text-lg md:text-xl lg:mb-3 lg:text-2xl">
          {video.title}
        </p>
        <p className="border-b border-[#E6E6E6] pb-4 text-xs font-medium text-[#666666] sm:pb-5 sm:text-sm md:text-base lg:pb-6 lg:text-lg">
          {video.preacher} • 주후 {dayjs(video.createdAt).format("YYYY.MM.DD")}
        </p>
      </div>
    </div>
  );
};

export default MainVideoSection;
