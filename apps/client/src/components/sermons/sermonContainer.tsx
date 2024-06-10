import { IYoutube } from "type";
import Sermon from "./sermon";

interface ISermonContainerProps {
  title: string;
  list: IYoutube[];
}

const SermonContainer = ({ list, title }: ISermonContainerProps) => {
  return (
    <div className="flex w-full items-center justify-center px-5 2xl:px-20">
      <div className="flex w-full flex-col gap-5">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 2xl:grid-cols-3">
          {list.map((sermon) => (
            <Sermon sermon={sermon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SermonContainer;
