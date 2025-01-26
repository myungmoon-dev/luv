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
        videoId={sermon.url}
      />

      <div className="flex items-end justify-between">
        <div className="flex flex-col">
          <p className="font-bold text-blue-600 md:text-2xl lg:text-xl">{sermon.title}</p>
          <div className="flex gap-1 text-sm text-gray-900 md:text-base">
            <p className="font-semibold">{sermon.preacher}</p>
            <p>|</p>
            {sermon.mainText && <p>{sermon.mainText}</p>}
          </div>
        </div>
        <p className="pr-1 text-sm md:text-base">{sermon.date && <p>{sermon.date}</p>} </p>
      </div>
    </div>
  );
};

export default Sermon;
