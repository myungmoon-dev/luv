import dayjs from "dayjs";
import { IYoutube } from "type";
import { YoutubeVideo } from "ui";
import SermonTitle from "./sermonTitle";
import MainVideoSection from "./videos/mainVideoSection";

interface IMainSermonSectionProps {
  video: IYoutube;
  sermonTitle: string;
  videoTitle: string;
  url?: string;
}
const MainSermonSection = ({ video, sermonTitle, videoTitle, url }: IMainSermonSectionProps) => {
  return (
    <div className="pl-[22px] sm:pl-[35px]">
      <SermonTitle title={sermonTitle} url={url} />
      <div className="-ml-[22px] mb-[20px] flex w-screen sm:-ml-[35px] sm:mb-[44px] md:mb-[40px] md:ml-0 md:grid md:w-full md:grid-cols-2 md:gap-[12px] lg:mb-[60px] lg:gap-[30px]">
        <MainVideoSection video={video} key={video._id} title={videoTitle} />
      </div>
    </div>
  );
};

export default MainSermonSection;
