import dayjs from "dayjs";
import { IYoutube } from "type";
import { YoutubeVideo } from "ui";

interface ISmallVideoProps {
  video: IYoutube;
}

const SmallVideo = ({ video }: ISmallVideoProps) => {
  return (
    <div>
      <YoutubeVideo videoId={video.url} className="aspect-video w-[157px] sm:w-[180px] lg:w-[250px]" />
      <div className="pt-[6px] sm:px-[12px] sm:pt-[13px] lg:px-0 lg:pt-[10px]">
        <p className="mb-[1px] text-[12px] font-medium text-[#001F54] sm:mb-[5px] sm:text-[15px] lg:mb-[9px] lg:text-[12px]">
          주일예배
        </p>
        <p className="text-[15px] font-medium text-[#222222] sm:text-[17px] lg:mb-[4px]">{video.title}</p>
        <p className="text-[12px] text-[#666666] sm:text-[13px] lg:text-[12px]">
          주후 {dayjs(video.createdAt).format("YYYY.MM.DD")}
        </p>
      </div>
    </div>
  );
};

export default SmallVideo;
