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
    <div className="pl-5 sm:pl-8 md:pl-10 lg:pl-16">
      <SermonTitle title={sermonTitle} url={url} />
      <div className="-ml-5 mb-5 flex w-screen sm:-ml-8 sm:mb-8 md:mb-10 md:ml-0 md:grid md:w-full md:grid-cols-2 md:gap-4 lg:mb-12 lg:gap-8">
        <MainVideoSection video={video} key={video._id} title={videoTitle} />
      </div>
    </div>
  );
};

export default MainSermonSection;
