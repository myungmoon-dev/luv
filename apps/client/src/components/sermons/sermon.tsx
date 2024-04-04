import { YoutubeVideo } from "ui";
import { IYoutube } from "type";

interface ISermonProps {
  sermon: IYoutube;
}

const Sermon = ({ sermon }: ISermonProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="font-HSBombaram3 text-lg sm:text-2xl">{`"${sermon.title}"`}</h1>
      <p className="text-sm text-gray-700">{`${sermon.preacher} | ${sermon.mainText}`}</p>
      <YoutubeVideo
        className="mt-10 flex h-[300px] w-[100%] items-center justify-center sm:w-[70%] lg:h-[450px]"
        videoId={sermon.videoId}
      />
    </div>
  );
};

export default Sermon;
