import { IYoutube } from "type";
import SermonTitle from "./sermonTitle";
import RowListVideoSeciton from "./videos/rowListVideoSection";

interface ISubSermonSectionProps {
  videos: IYoutube[];
  sermonTitle: string;
  videoTitle: string;
}

const SubSermonSection = ({ videos, sermonTitle, videoTitle }: ISubSermonSectionProps) => {
  return (
    <div className="border-b border-[#E6E6E6] pb-3 pl-[22px] sm:pl-[35px]">
      <SermonTitle title={sermonTitle} />
      <div className="flex gap-[18px] overflow-scroll sm:gap-[23px] md:gap-[11px] lg:gap-[20px]">
        {videos.map((video) => (
          <RowListVideoSeciton video={video} title={videoTitle} key={video._id} />
        ))}
      </div>
    </div>
  );
};

export default SubSermonSection;
