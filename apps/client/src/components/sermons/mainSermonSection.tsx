import { IYoutube } from "type";
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
    <div>
      <div className="pl-5 sm:pl-8 md:mx-auto md:max-w-3xl md:px-0 lg:max-w-4xl">
        <SermonTitle title={sermonTitle} url={url} />
      </div>
      <div className="mb-5 flex w-full sm:mb-8 sm:pl-8 md:mx-auto md:mb-10 md:w-full md:max-w-3xl md:px-0 lg:mb-12 lg:max-w-4xl">
        <MainVideoSection video={video} key={video._id} title={videoTitle} />
      </div>
    </div>
  );
};

export default MainSermonSection;
