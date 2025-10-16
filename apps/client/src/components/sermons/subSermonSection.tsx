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
    <div className="border-b border-[#E6E6E6] pb-5 pl-5 sm:pb-8 sm:pl-8 md:pb-10 md:pl-10 lg:pb-12 lg:pl-16">
      <SermonTitle title={sermonTitle} />
      <div className="flex gap-4 overflow-scroll sm:gap-6 md:gap-4 lg:gap-6">
        {videos.map((video) => (
          <RowListVideoSeciton video={video} title={videoTitle} key={video._id} />
        ))}
      </div>
    </div>
  );
};

export default SubSermonSection;
