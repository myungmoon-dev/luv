import dayjs from "dayjs";
import { IYoutube } from "type";
import { YoutubeVideo } from "ui";

interface IMainVdieoSectionProps {
  video: IYoutube;
  title: string;
}
const MainVideoSection = ({ video, title }: IMainVdieoSectionProps) => {
  return (
    <div className="w-full bg-white md:w-full">
      <YoutubeVideo
        videoId={video.url}
        className="aspect-video w-full sm:w-[373px] md:h-[184px] md:w-full lg:h-[281px]"
      />
      <div className="px-[20px] pb-[13px] pt-[18px] sm:pb-[15px] sm:pt-[16px] lg:pb-[18px] lg:pl-[32px] lg:pt-[20px]">
        <p className="mb-[5px] text-[13px] font-medium text-[#001F54] sm:mb-[6px] sm:text-[15px] md:mb-[7px]">
          {title}
        </p>
        <p className="mb-[6px] text-[18px] font-medium text-[#222222] sm:mb-[3px] sm:text-[20px] lg:mb-[8px] lg:text-[18px]">
          {video.title}
        </p>
        <p className="border-b border-[#E6E6E6] pb-5 text-[13px] font-medium text-[#666666] lg:text-[16px]">
          {video.preacher} • 주후 {dayjs(video.createdAt).format("YYYY.MM.DD")}
        </p>
      </div>
    </div>
  );
};

export default MainVideoSection;
