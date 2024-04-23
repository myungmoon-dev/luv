import { YoutubeVideo } from "ui";
import { IYoutube } from "type";

interface ISermonProps {
  sermon: IYoutube;
}

const Sermon = ({ sermon }: ISermonProps) => {
  return (
    <div className="flex w-full flex-col">
      <YoutubeVideo className="mb-3 flex h-[300px] items-center justify-center lg:h-[200px]" videoId={sermon.videoId} />
      <h1 className="font-semibold md:text-xl">{sermon.title}</h1>
      <p className="text-sm text-gray-700">{`${sermon.preacher} | ${sermon.mainText}`}</p>
    </div>
  );
};

export default Sermon;
