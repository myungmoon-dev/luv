import { YoutubeVideo } from "ui";
import { IYoutube } from "type";

interface ISermonProps {
  sermon: IYoutube;
}

const Sermon = ({ sermon }: ISermonProps) => {
  return (
    <div className="flex w-full flex-col">
      <YoutubeVideo
        className="mb-3 flex h-[200px] items-center justify-center md:h-[400px] lg:h-[300px] xl:h-[400px] 2xl:h-[300px]"
        videoId={sermon.videoId}
      />
      <h1 className="font-SCoreDream md:text-lg lg:text-xl">{sermon.title}</h1>
      <div className="flex gap-1 text-sm text-gray-700 lg:text-lg">
        <p>{sermon.preacher}</p>
        {sermon.mainText && <p>{` | ${sermon.mainText}`}</p>}
      </div>
    </div>
  );
};

export default Sermon;
