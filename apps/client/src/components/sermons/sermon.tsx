import { Card } from "ui";
import YoutubeVideo from "../youtubeVideo";
import { IYoutube } from "type";

interface ISermonProps {
  sermon: IYoutube;
}

const Sermon = ({ sermon }: ISermonProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="font-HSBombaram3 text-lg sm:text-2xl">{`"${sermon.title}"`}</h1>
      <p className="text-sm text-gray-700">{`${sermon.preacher} | ${sermon.mainText}`}</p>
      <Card className="relative mt-10 flex h-[300px] w-[100%] items-center justify-center sm:w-[70%] lg:h-[450px]">
        <YoutubeVideo videoId={sermon.videoId} videoType={sermon.videoType} />
      </Card>
    </div>
  );
};

export default Sermon;
